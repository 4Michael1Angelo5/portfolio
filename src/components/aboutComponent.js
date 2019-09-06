import React  from 'react';
import {Button} from 'reactstrap';
// import {baseUrl} from '../assets/baseUrl';

function About(){

 


    return(
       
        <div className = "container-fluid">
                

            <div className = "row d-flex align-items-center">
                <div className = "col-lg-8 col-12 ">
                    <div className = "row-content d-flex justify-content-center">
            <h1 className = " aboutTitle " >Meet the Man Behind the Myth</h1>
            </div>
                <div id = "aboutPhoto" className = "imgCircle "> </div>
                </div>
                <div className = "col-12 col-lg-4">
                

                <p className = "aboutParagraph mt-4 mt-lg-0">
                    Hi, I’m Chris Chun aka Michael Angelo. I am a web developer 
                    living and working in Tacoma, WA. I make websites beautiful, 
                    intuitive, and relevant.<br></br><br></br>
                    
                    As a naturally artistic and creative individual 
                    I have a wide gamut of design aesthetics ranging 
                    from cyber punk to minimalist. As a recreational mathematician,
                    I can leverage logic against abstract problems to achieve 
                    material design success.<br></br><br></br>

                    An avid skater since 1999, skateboarding has greatly shaped 
                    the lens by which I see the world and helped to define how I 
                    interact with it. While others driving down the street see people
                    and houses, I see a concrete jungle gym. I like to believe 
                    that its this type of creative outlook that keeps me inspired
                    and brings  me to continually challenge myself. 
                </p>

                <Button className = "link" href =  "http://localhost:3000/Resume.pdf"  target="_blank"> Resume </Button>
                </div>

                

            </div>
        </div>
       
    )

    }


export default About ; 