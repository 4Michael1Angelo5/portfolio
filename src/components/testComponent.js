import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './contentComponent';



function GetOrigin(){

    var Xo = window.outerWidth/2;
    var Yo = window.innerHeight/8;
    var txt = 'the vaninishing point is ( '+ Xo + ' , ' + Yo + ' )';
    return(

        <div style= {{color:"white"}}> {txt}
            <div id = 'vanishingPoint' style = {{    
                position: 'sticky',
                backgroundColor: 'red',
                border: 3, 
                borderRadius:10,
                top:0,
                
                zIndex:10,
                width: 10,
                height:10,
                
                transform: "translateX("+ Xo+"px)  translateY(" + Yo +"px)"
            }}/>
        </div>
    );
}

function Rcube(){

    return(
        <div className= "container-fluid ">
            <div className = "row d-flex justify-content-center">
                <div  className = " col-6 col-md-4 col-sm-4 col-xs-6 ">  
                    <div className = "view1b"  >
                        <div   className = 'box1'>
                            <div  className = 'cube'>
                                <div className = "side front"></div>
                                <div className = "side back"></div>
                                <div className ="side left"></div>
                                <div className = "side right"></div>
                                <div className = "side top"></div>
                                <div className = "side bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


function RenderCubes(props){

const x = [ 0,1,2,3,4,5]; 
const names = ["front","top","right","left","bottom","back"] ; 
const ZAmount = window.innerWidth>576 ? "rotate(90deg) translateZ(13vw)":"rotate(90deg) translateZ(22vw)"; 
console.log(ZAmount)

    return(
        
        <div className= "container-fluid ">
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
                        activeCube.style.cssText="transition-delay: 1s;transition: transform 1500ms ease 0ms; transform:  translateZ(0px) translateY(" +`${translateYAmount}`+ "px)  translateX(" +`${translateXAmount}`+ "px)  scale(1.95) rotateY(90deg ) ; transform-style: preserve-3d; will-change: transform; "
                       
                       
                       
                       
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
                
               <div key =  {index} className = " col-6 col-md-4 col-sm-4 col-xs-6 ">
                <div  key = {index} className = 'box1'>
                <div key ={index} className = "view1b"  >
                    
                        <div key = {index} className = 'cube'>
                            {
                            x.map(x=>{
                                if (x ===0){
                                    return(

                                       
                                    <div  onClick= {renderContent} className ={ "side  " +names[x]} key={x} 
                                    style={ props.content[index].EXIF ==="false"?
                                            {backgroundImage: props.content[index].image,
                                            zIndex: `${16 - index}`
                                            }:
                                            {backgroundImage: props.content[index].image,
                                            zIndex: `${16 - index}`, transform: `${ZAmount}`}
                        
                                    }
                                    >
                                    
                                    </div> 
                                          
                                    
                                    )}
                                else{
                                    return(
                                    <div  className = {"side  " + names[x] } key={x}
                                            style = {{zIndex: `${16 - index}`}}
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


class Test extends Component{




changePerspectiveOnScroll(){

// const vanishingPoint = [window.innerWidth/2,window.innerHeight/4] ; 
const vanishingPoint  = document.getElementById("vanishingPoint").getBoundingClientRect();

var frontFaceXYs = [];

var frontFaces =  document.getElementsByClassName("front");


Object.keys(frontFaces).forEach(index=>frontFaceXYs.push(frontFaces[index].getBoundingClientRect()));
console.log(frontFaceXYs);

const elements = document.getElementsByClassName("view1b") 

for (var i = 0 ; i<elements.length; i++){
    // (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint[0] -  frontFaceXYs[i].left }px  ${   (vanishingPoint[1] - frontFaceXYs[i].top )}px `))
    (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top}px `));
    // (elements[i].style.setProperty("-webkit-perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top}px `))
 
    }



 window.onscroll = function(){
    //--------------- Set Perspective for all Cubes on scroll ---------------------------------------------------------
   
    var scrollHeight = window.scrollY ;
     const elements = document.getElementsByClassName("view1b") ;
 

    for (var i = 0 ; i<elements.length; i++){
        // (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint[0]- frontFaceXYs[i].left}px  ${(vanishingPoint[1] - frontFaceXYs[i].top +scrollHeight)}px `))
         (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top +scrollHeight}px `));
          //(elements[i].style.setProperty("-webkit-perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top}px `))
 
    }



    //---------------- Set Perspective for all Content description boxes-------------------------------------
   
 }







}
changePerspectiveOnResize(){

    // const vanishingPoint = [window.innerWidth/2,window.innerHeight/4] ; 
    const vanishingPoint  = document.getElementById("vanishingPoint").getBoundingClientRect();
    
    var frontFaceXYs = [];
    
    var frontFaces =  document.getElementsByClassName("front");
    
    
    Object.keys(frontFaces).forEach(index=>frontFaceXYs.push(frontFaces[index].getBoundingClientRect()));
    // console.log(frontFaceXYs);

    console.log(window.innerWidth)
    
    const elements = document.getElementsByClassName("view1b") 
    
    for (var i = 0 ; i<elements.length; i++){
        // (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint[0] -  frontFaceXYs[i].left }px  ${   (vanishingPoint[1] - frontFaceXYs[i].top )}px `))
        (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top}px `))
        
        }
    
    
    
     window.onresize = function(){
        //--------------- Set Perspective for all Cubes on resize ---------------------------------------------------------
       
        var scrollHeight = window.scrollY ;
         const elements = document.getElementsByClassName("view1b") ;
     
    
        for (var i = 0 ; i<elements.length; i++){
            // (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint[0]- frontFaceXYs[i].left}px  ${(vanishingPoint[1] - frontFaceXYs[i].top +scrollHeight)}px `))
             (elements[i].style.setProperty("perspective-origin", ` ${  vanishingPoint.left- frontFaceXYs[i].left}px  ${ vanishingPoint.top - frontFaceXYs[i].top +scrollHeight}px `))
       
        }
    
    
    
        //---------------- Set Perspective for all Content description boxes-------------------------------------
       
     }
    
    
    
    
    
    
    
    }




componentDidMount(){
 
    window.addEventListener("scroll",this.changePerspectiveOnScroll());
    // window.addEventListener("resize",this.changePerspectiveOnResize());

   
}

componentDidUpdate(){
    
    window.addEventListener("scroll",this.changePerspectiveOnScroll())
    // window.addEventListener("resize",window.alert("you just changed screen size"));
}


render(){

    return (
        <React.Fragment>
            
            <GetOrigin/>
            <RenderCubes content = {this.props.content}/>
            
            
         </React.Fragment>  
    )
}

}


export default Test