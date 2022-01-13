let hero=document.querySelector('.hero');
let text=hero.querySelector('h1');

const walk=100;

shadow=(e)=>{
    // console.log(e.offsetX, e.offsetY,e.target);
    let {offsetWidth:width,offsetHeight:height}=hero;
    let {offsetX:x,offsetY:y}=e;

    if(e.target.matches('h1')){
        x=x+e.target.offsetLeft;
        y=y+e.target.offsetTop;

    }
    let walkx=Math.round((x/width  * walk)-walk/2);
    let walky=Math.round((y/height  * walk)-walk/2);

    text.style.textShadow=`
    ${walkx}px ${walky}px 0px rgba(0,245,123,0.5),
    ${walkx * -1}px ${walky}px 0px rgba(0,5,13,0.5),
    ${walkx }px ${walky* -1}px 0px rgba(0,5,13,0.5)
    
    `;
    


}

hero.addEventListener("mousemove",shadow);