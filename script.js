
const GRID_WIDTH = 700;
let initialOpacity = 10;
let isRainbow = false;
const bodyHTML = document.querySelector("body");
const appContainer = document.createElement("div");
appContainer.classList = "main-container";

const sizeChangerContainer = document.createElement("form");

const input = document.createElement("input");
input.setAttribute("type", "number");
input.required = true;
input.placeholder = "Min:16/Max:100";
sizeChangerContainer.appendChild(input);

const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Set Pixel Quantity";
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputVal = Number(input.value);
    if(inputVal && inputVal >= 16 && inputVal <= 100){
        const oldGrid = document.querySelector(".grid-container");
        appContainer.removeChild(oldGrid);
        createGrid(inputVal);
    } else {
        alert("Please insert a value between 16 and 100");
    }
})
sizeChangerContainer.appendChild(btn);

appContainer.appendChild(sizeChangerContainer);

const toggleRainbowBtn = document.createElement("button");
toggleRainbowBtn.textContent = "Toggle Rainbow";
toggleRainbowBtn.addEventListener("click", () =>{
    if(!isRainbow){
        isRainbow = true;
        initialOpacity = 10;
    } else{
        isRainbow = false;
        initialOpacity = 10;
    }
})

appContainer.appendChild(toggleRainbowBtn);

function rdmColor(){
    const redVal = Math.floor((Math.random() * 255));
    const greenVal = Math.floor((Math.random() * 255));
    const blueVal = Math.floor((Math.random() * 255));

    return `rgb(${redVal} ${greenVal} ${blueVal})`;
}

// Grid code

function createGridItem(parentNode, iterator, size){
    const div = document.createElement("div");
    div.classList = `gridItem-${iterator} item`;
    div.style.width=`${GRID_WIDTH / size}px`;
    div.style.height=`${GRID_WIDTH / size}px`;
    div.addEventListener("mouseover", (e)=>{
        console.log(initialOpacity);
        div.style.opacity = `${initialOpacity}%`;
        initialOpacity < 100? initialOpacity += 10 : initialOpacity;
        div.style.backgroundColor = isRainbow? rdmColor(): "black";
    })
    
    parentNode.appendChild(div);
}

function createGridLine(parentNode, size, iterator){
    const div = document.createElement("div");
    div.classList = `gridLine-${iterator} line`;
    for(let i = 1; i <= size; i++){
        createGridItem(div, i, size);
    }
    parentNode.appendChild(div);
}

function createGrid(size = 16){
    const div = document.createElement("div");
    div.classList = "grid-container";
    for(let i = 1; i <= size; i++){
        createGridLine(div, size, i);
    }
     return appContainer.appendChild(div);
}

createGrid();

bodyHTML.appendChild(appContainer)