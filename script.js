const shiva=document.querySelector(".button")

shiva.addEventListener("mouseover",(event)=>{
    const x=(event.pageX-shiva.offsetLeft);
    const y=(event.pageY-shiva.offsetTop);

    shiva.style.setProperty("--xPos",x+"px");
    shiva.style.setProperty("--yPos",y+"px");

})