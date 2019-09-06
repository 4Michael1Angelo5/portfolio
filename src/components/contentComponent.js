import React from 'react';
import {Card, CardText, CardBody,CardTitle} from 'reactstrap';
import ReactPlayer from 'react-player'

  








const  Content = (props)=>{
  
    

    

    function revertView(){
      const activeCube=  document.getElementsByClassName("cube")[props.index];
      const activeCubeXYs = activeCube.getBoundingClientRect();
      const translateAmount = window.innerWidth/2 - activeCubeXYs.left - .5*activeCubeXYs.width;
      const translateXAmountLandscapeMode = window.innerWidth/2 - activeCubeXYs.left - .5*activeCubeXYs.width - window.innerWidth/4 +40; 
                       
      if (window.innerWidth<window.innerHeight){
    activeCube.style.cssText="transition: transform 1500ms ease 0ms; transform:  translateX(" +`${translateAmount}`+ "px) scale(1) rotateY(0deg ) ; will-change: transform; "
    }
    else{
      activeCube.style.cssText="transition: transform 1500ms ease 0ms; transform:  translateX(" +`${translateXAmountLandscapeMode}`+ "px) scale(1) rotateY(0deg ) ; will-change: transform; "
   
    }
    var allOtherCubes = Object.keys(props.props) ;allOtherCubes.splice(props.index,1)
    var allOtherCubesElements = [];

    allOtherCubes.forEach(element => allOtherCubesElements.push( document.getElementsByClassName("col-6 col-md-4 col-sm-4 col-xs-6 ")[element])) ;
   Object.keys(allOtherCubesElements).forEach(element => allOtherCubesElements[element].className = allOtherCubesElements[element].className.replace(/\binactive\b/g, ""))
   
    // allOtherCubes.forEach(element => allOtherCubesElements.push( document.getElementsByClassName("cube")[element])) ;
    // Object.keys(allOtherCubesElements).forEach(element => allOtherCubesElements[element].className = allOtherCubesElements[element].className.replace(/\binactive\b/g, ""))
    

    document.getElementsByClassName("left")[props.index].firstChild.style.setProperty("display", "none")
      
    
    } 

   
     // For Portrait Mode
            
   if (window.innerWidth<window.innerHeight){     
     if(props.props[props.index].type ==="picture"){ return(
      <div className = "  activeCubeBackground"    
              style = { props.props[props.index].EXIF==="false" ?
                      {backgroundImage:props.props[props.index].image,
                      backgroundSize:"cover",
                      width:"100%",height:"100%",
                      backfaceVisibility:"hidden"} :
                      
                      {backgroundImage:props.props[props.index].image,
                      backgroundSize:"cover",
                      width:"100%",height:"100%",
                      backfaceVisibility:"hidden",
                      transform:"rotate(90deg) "} 
                      
                
                      }>
         
             

        {/* -------------------Button Options Below------------------- */}
       <div id = "circle" onClick= {revertView}
         style ={ props.props[props.index].EXIF==="false" ?
                  {position:"absolute"}:
                  {transform: "rotate(-90deg) translateX(-566.6666667%)"}}>
          <div id = "back-arrow-00">
              {/* <div id = "arrow-line"></div> */}             
          </div> 
       </div>

        {/* <div onClick={revertView} class="close"></div>  */}
        {/* <Button  color="link" className="fa fa-arrow-left" onClick= {revertView}></Button> */}

        {/* -------------------Button Options Above------------------- */}
       
         

      <Card style = { props.props[props.index].EXIF==="false" ?
                    {marginTop:"105%" ,maxHeight:"100%",overflowY:"hidden"}:
                    {maxHeight:"100%",overflowY:"hidden",
                    transform:"rotate(-90deg) translateY(35%)",
                    transformOrigin: "top right"}
                    }>
        
        <CardBody className = "contentCard hideScrollBar">

          <CardTitle>{props.props[props.index].title}</CardTitle>
         
          <CardText>{props.props[props.index].description}</CardText>
          
        </CardBody>

      </Card>
    
    </div> 
    
    )
  }
  // For Portrait Mode and type === video
else 
return( 
  <div className = "  activeCubeBackground"    
        
        style = {{
          
          width:"100%",height:"100%",
          backfaceVisibility:"hidden"}}
          >

        {/* -------------------Button Options Below------------------- */}
        <div id = "circle" onClick= {revertView}>
          <div id = "back-arrow-00">
              {/* <div id = "arrow-line"></div> */}             
          </div> 
       </div>

        {/* <div onClick={revertView} class="close"></div>  */}
        {/* <Button  color="link" className="fa fa-arrow-left" onClick= {revertView}></Button> */}

        {/* -------------------Button Options Above------------------- */}
        

        <ReactPlayer url={props.props[props.index].image1} 
          playing 
          width="100%"
          height="100%"
          controls={true}/>
       
      <Card style = {{marginTop:"10%" ,maxHeight:"100%",overflowY:"hidden"}}>
        
        <CardBody className = "contentCard hideScrollBar">

          <CardTitle>{props.props[props.index].title}</CardTitle>
         
          <CardText>{props.props[props.index].description}</CardText>
          
        </CardBody>

      </Card>
    </div> 
    ) } 

    //For Landscape Mode
    else
    if (props.props[props.index].type==="picture"){
          return(  
    //check to see if EXIF data is read incorrectly and apply rotation
          <div className = "  activeCubeBackground"  
                style = { props.props[props.index].EXIF ==="false"
                          ?
                          {backgroundImage:props.props[props.index].image,
                          backgroundSize:"cover",
                          width:"100%",height:"100%",
                          backfaceVisibility:"hidden"}
                          :
                          {backgroundImage:props.props[props.index].image,
                          backgroundSize:"cover",
                          width:"100%",height:"100%",
                          backfaceVisibility:"hidden",
                          transform:"rotate(90deg) "}
                          }>
                
            {/* -------------------Button Options Below------------------- */}
            {/*          
            <ExifOrientationImg src =  {props.props[props.index].image1}
            style ={{width:"100%",height:"100%",objectFit:"cover"}}/> */}
             
            {/* <Button  color="link" className="fa fa-arrow-left" onClick= {revertView}></Button> */}
           


            <div id = "circle" onClick= {revertView}
                  style ={ props.props[props.index].EXIF==="false" ?
                  {position:"absolute"}:
                  {transform: "rotate(-90deg) translateX(-566.6666667%)"}}>
              <div id = "back-arrow-00">
                  {/* <div id = "arrow-line"></div> */}             
              </div> 
          </div>

            {/* <div onClick={revertView} className="close"></div>  */}

            {/* -------------------Button Options Above------------------- */}
  
            
             
            {/* was translateX 129%  and width 80%   */}
     
<Card  style = {  props.props[props.index].EXIF ==="false"?
                  {transform: "translateX(129%)" , width: "80%", maxHeight: "100%",overflowY:"hidden"}:
                  {transform: "rotate(-90deg) translateX(5%)", 
                   transformOrigin:"top left", width: "80%",
                   maxHeight: "100%",overflowY:"hidden"}
                
                } > 
          
<CardBody className = "contentCard hideScrollBar" >
  <CardTitle>{props.props[props.index].title}</CardTitle>
 
  <CardText>{props.props[props.index].description}</CardText>
  
</CardBody>
</Card> 


</div>

      
      
      )}
      //----------------------for lanscape mode and type === video--------------------------
    else
        return(
          <div className = "  activeCubeBackground"  
                style = {{
                          backgroundSize:"cover",
                          width:"100%",height:"100%",
                          backfaceVisibility:"hidden"}}>
             
          
                <ReactPlayer url={props.props[props.index].image1} 
                                  playing 
                                  width="100%"
                                  height="100%"
                                  controls={true}/>

          {/* -------------------Button Options Below------------------- */}

                 {/* <Button  color="link" className="fa fa-arrow-left" onClick= {revertView}></Button> */}
           


                 <div id = "circle" onClick= {revertView}>
                    <div id = "back-arrow-00">
                        {/* <div id = "arrow-line"></div> */}             
                    </div> 
                 </div>

                  {/* <div onClick={revertView} className="close"></div>  */}

            {/* -------------------Button Options Above------------------- */}



                <Card  style = {{transform: "translateX(129%) translateY(-100%)" , width: "80%", maxHeight: "100%",overflowY:"hidden"}} > 
                      <CardBody className ="hideScrollBar" >
                        <CardTitle>{props.props[props.index].title}</CardTitle>                
                        <CardText>{props.props[props.index].description}</CardText>                  
                      </CardBody>
                </Card> 


          </div>
       
          )
      
      }


export default Content
