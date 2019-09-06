import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './contentComponent';



function GetOrigin(){
    var Xo = document.body.clientWidth/2-11.5;
    // var Xo = window.outerWidth/2;
    var Yo = window.innerHeight/4;
   
    
    // var txt = 'the vaninishing point is ( '+ Xo + ' , ' + Yo + ' )';
    return(

        <div style= {{color:"white"}}> 
            <div id = 'vanishingPoint' style = {{    
                position: 'sticky',
                // backgroundColor: 'red',
                border: 3, 
                borderRadius:10,
                top:0,
                
                zIndex:1000,
                width: 10,
                height:10,
                
                transform: "translateX("+ Xo+"px)  translateY(" + Yo +"px)"
            }}/>
        </div>
    );
}


function RenderCubes(props){

const x = [ 0,1,2,3,4,5]; 
const names = ["top","bottom","right","left","back","front"] ; 
const ZAmount = window.innerWidth>576 ? "rotate(90deg) translateZ(13vw)":"rotate(90deg) translateZ(22vw)"; 
console.log(ZAmount)

    return(
        
        <div className= "container-fluid "
        style = {{paddingRight:"6vw",paddingLeft:"6vw"}}>
        <div className = "row d-flex justify-content-center">
    
            {
                
                Object.keys(props.content).map(index=>{
                   
                  
                    
                    function renderContent(){ 
                       
                        //  this.setState({ActiveCube:true})
                        const activeCube=  document.getElementsByClassName("cube")[index];
                        const activeCubeXYs = activeCube.getBoundingClientRect();
                        const translateXAmount = window.innerWidth/2 - activeCubeXYs.left - .5*activeCubeXYs.width;
                        const translateYAmount = window.innerHeight/2 - activeCubeXYs.top -1.5*activeCubeXYs.width;
                        const translateXAmountLandscapeMode = window.innerWidth/2 - activeCubeXYs.left - .5*activeCubeXYs.width - window.innerWidth/4 +40 ; 
         
                        var allOtherCubes = Object.keys(props.content); allOtherCubes.splice(index,1);     
                        allOtherCubes.forEach(element=>document.getElementsByClassName("col-6 col-md-4 col-sm-4 col-xs-6  ")[element].classList.toggle("inactive"));
                        // allOtherCubes.forEach(element=>document.getElementsByClassName("cube")[element].classList.toggle("inactive"));

                        
                        if (window.innerHeight >= window.innerWidth){
                        activeCube.style.cssText="transition-delay: 1s;transition: transform 1500ms ease 0ms; transform:  translateZ(0px) translateY("+ `${translateYAmount}` +"px)  translateX(" +`${translateXAmount}`+ "px)  scale(1.95) rotateY(90deg ) ; transform-style: preserve-3d; will-change: transform; "
                       
                       
                       
                       
                        ReactDOM.render(<Content  props = {props.content} index = {index} />,document.getElementsByClassName("left")[index]);
                     
                    }

                        else {
                             
                             activeCube.style.cssText="transition-delay: 1s;transition: transform 1500ms ease 0ms; transform:  translateZ(0px) translateY(" +`${translateYAmount+200}`+ "px)  translateX(" +`${translateXAmountLandscapeMode}`+ "px)  scale(1.95) rotateY(90deg ) ; transform-style: preserve-3d; will-change: transform; "
                             ReactDOM.render(<Content  props = {props.content} index = {index} />,document.getElementsByClassName("left")[index]);
                     
                        } ;

                        if (document.getElementsByClassName("left")[index].firstChild != null){
                            document.getElementsByClassName("left")[index].firstChild.style.setProperty("display","inline-block")//change to inline for exif data
                        }

                    
                            
                    }

                   
                    
                                            
            return(
                
               <div key =  {index} className = " col-6 col-md-4 col-sm-4 col-xs-6 "
                style = {{paddingRight:"0px",paddingLeft:"0px",
               }}>
                
                <div key ={index} className = "box1"  >
                    <div  key = {index} className = 'view1b'>
                        <div key = {index} className = 'cube'>
                            {
                            x.map(x=>{
                                if (x ===5){
                                    return(
                                    <div  onClick= {renderContent} className ={ "side  " +names[x]} key={x} 
                                            style={ 
                                                    props.content[index].EXIF ==="false"
                                                    ?
                                                    {backgroundImage: props.content[index].image}
                                                    :
                                                    {backgroundImage: props.content[index].image,
                                                    transform: `${ZAmount}`}
                                                }>
                                    </div> 
                                    )}
                                else{
                                    return(
                                    <div  className = {"side  " + names[x] } key={x}    
                                    >

                                    </div> )}
                                })
                            }
                        </div>
                    </div>
                </div>
                </div>
              
            )})
            }
            </div>
        </div>
        
        
       
        )
}


class Cubes extends Component{




changePerspectiveOnScroll(){

// const vanishingPoint = [window.innerWidth/2,window.innerHeight/4] ; 

 const vanishingPoint  = document.getElementById("vanishingPoint").getBoundingClientRect();

var frontFaceXYs = [];

var frontFaces =  document.getElementsByClassName("front");


Object.keys(frontFaces).forEach(index=>frontFaceXYs.push(frontFaces[index].getBoundingClientRect()));

var cubeCenters = [] ; 

Object.keys(frontFaces).forEach(index=>cubeCenters.push( 100-Math.abs(Math.round(1/frontFaceXYs[1].width*(frontFaceXYs[index].top+ 1/2*frontFaceXYs[index].width - vanishingPoint.top )))));
//console.log(cubeCenters);



const elements = document.getElementsByClassName("view1b") 
const Zelements = document.getElementsByClassName("col-6 col-md-4 col-sm-4 col-xs-6 ") 
 
for (var i = 0 ; i<elements.length; i++){
    
    (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top}px `));
    //Zelements[i].style.setProperty("z-index", `${100-Math.abs(Math.round(1/frontFaceXYs[1].width*(frontFaceXYs[i].top+ 1/2*frontFaceXYs[i].width - vanishingPoint.top )))}`);  
        
    }



 window.onscroll = function(){
    //--------------- Set Perspective for all Cubes on scroll ---------------------------------------------------------
   
     var scrollHeight = window.scrollY ;
    
    for (var i = 0 ; i<elements.length; i++){
         (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top +scrollHeight}px `));
          

         
         
          //---------------change z-index onscroll

          Zelements[i].style.setProperty("z-index", `${100-Math.abs(Math.round(1/frontFaceXYs[1].width*(frontFaceXYs[i].top+ 1/2*frontFaceXYs[i].width -scrollHeight - vanishingPoint.top )))}`);  
        
    }
 }

}

componentDidMount(){
    
    window.addEventListener("scroll",this.changePerspectiveOnScroll()) ;   
}

componentDidUpdate(){
    
    window.addEventListener("scroll",this.changePerspectiveOnScroll())
    
}


render(){

    return (
        <React.Fragment>
            <div className= "container-fluid "
        style = {{paddingRight:"6vw",paddingLeft:"6vw"}}>
            <h5> Work </h5>
            <p> Showing {this.props.category} projects.</p>
            </div>
                                 
            <GetOrigin/>
            <RenderCubes content = {this.props.content}/>           
            
         </React.Fragment>  
    )
}

}


export default Cubes