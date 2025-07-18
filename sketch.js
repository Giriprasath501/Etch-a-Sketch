const cont = document.querySelector(".container");
function createGrid(size) {
    cont.innerHTML = ''; 
    const innerSize = cont.clientWidth;
    const squareSize = innerSize / size; 
    
    let totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        const squarediv = document.createElement("div");
        squarediv.classList.add("square");
        squarediv.style.width = `${squareSize}px`;
        squarediv.style.height = `${squareSize}px`;
        squarediv.style.boxSizing = 'border-box';
        cont.appendChild(squarediv);
    }
    hovereffect()
    
   }
function getrgb(){
   const r = Math.floor(Math.random()*256);
   const g = Math.floor(Math.random()*256);
   const b = Math.floor(Math.random()*256);
   return `rgb(${r}, ${g}, ${b})`
}
function hovereffect() {
    const boxes = document.querySelectorAll(".square");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
    
    if (!box.dataset.opacity) {
        box.style.backgroundColor = getrgb();
        box.dataset.opacity = "0";
    }

    let currentOpacity = parseFloat(box.dataset.opacity);

    if (currentOpacity < 1) {
        currentOpacity = Math.min(currentOpacity + 0.1, 1);
        box.dataset.opacity = currentOpacity.toFixed(1);

        box.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${currentOpacity}), rgba(0, 0, 0, ${currentOpacity}))`;
    }
});
    });
}


const btn = document.querySelector(".create");
btn.addEventListener('click',() =>{
   let size = prompt("enter a num",16);
   size = parseInt(size)
   if(isNaN(size) || size<1 || size>100){
      alert("num not in limit");
      return;
   }
   createGrid(size);
   
   
})
 
 
createGrid(16);
