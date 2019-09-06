

export const CUBES =  { 
    
    style: {"transformStyle": "preserve-3d"},
    image: "Assests/images/pic1.jpg",
    category: "WoodWorking",
    face : {
        position : "absolute",
        height :  '26vw' , 
        width : '26vw', 
        margin: "1.5vw",
        background:  "rgba(0, 156, 204,0.671)",//'rgba(16, 114, 21, 0.671)',
        border: '3px solid rgb(138, 44, 156,.7)' ,
        textAlign : 'center' , 
        borderRadius: '10px' },
    side: [
        { 'transform' : 'translateZ(13vw)',  'backgroundColor':"rgb(115, 115, 115)" ,'backgroundSize': 'cover'}, // front-side
        { 'transform' : 'rotateX(90deg) translateZ(13vw)'},                  // top-side
        { 'transform' : 'rotateY(90deg) translateZ(13vw)'},                  // right-side
        { 'transform' : 'rotateY(-90deg) translateZ(13vw)'},                 // left-side
        { 'transform' : 'rotateX(-90deg) translateZ(13vw)'},                 // bottom-side
        { 'transform' : 'rotateY(-180deg) translateZ(13vw)'}                 // back-sdie
        ]
    
    }
    
 