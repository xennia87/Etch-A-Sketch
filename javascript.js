const container = document.querySelector(".container");
let button = document.getElementById("clearButton");

function addDiv(numberOfDivsToCreate) {
    let gridCellDimensions = ((600 / numberOfDivsToCreate) - 2).toFixed(2);
    let gridSize = Math.pow(numberOfDivsToCreate, 2);

    // Create grid squares & add to container

    for (let i = 0; i < gridSize; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('grid');
        newDiv.style.height = gridCellDimensions + 'px';
        newDiv.style.width = gridCellDimensions + 'px';
    }
    
    let gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
    console.log(gridCellDimensions);
    console.log("Grid has been created!!");

  }

// change grid square color to red
function changeColor() {
    this.style.backgroundColor = '#ff9999'; 
}

// clear grid + prompt for new grid size

function clear() {
    let reqGridSize = prompt("How many squares per side? (max 100)");
    if (reqGridSize > 100) {
        alert("Please input a number below 100");
        clear();
    } else {
        if (reqGridSize >= 1 && reqGridSize <=100) {
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild); // removes all grid squares
            }
            addDiv(reqGridSize); // create new grid 
        }
    }
}

button.addEventListener('click', clear);
window.onload = addDiv(16);