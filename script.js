const bodyHTML = document.querySelector("body");

const appContainer = document.createElement("div");
appContainer.classList = "main-container";

function createDivInside(parentNode, iterator){
    const div = document.createElement("div");
    div.classList = `gridItem-${iterator} item`;
    
    div.addEventListener("mousemove", (e)=>{
        div.style.backgroundColor = "black";
    })
    
    parentNode.appendChild(div);
}

function createGridLine(parentNode, size, iterator){
    const div = document.createElement("div");
    div.classList = `gridLine-${iterator} line`;
    for(let i = 1; i <= 16; i++){
        createDivInside(div, i);
    }
    parentNode.appendChild(div);
}

function createGrid(size = 16){
    const div = document.createElement("div");
    div.classList = "grid-container";
    for(let i = 1; i <= size; i++){
        createGridLine(div, size, i);
    }
    appContainer.appendChild(div);
}

createGrid();

bodyHTML.appendChild(appContainer)