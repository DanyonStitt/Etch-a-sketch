// Setting an empty variable for the color
let color = "black";

// Create the variable that selects the container
const container = document.querySelector(".container");

function makeGrid() {
    // Delete all current cells
    const oldCells = document.querySelectorAll(".cell");
    oldCells.forEach(box => {box.remove();});

    // Define the number of columns and rows
    let rows = prompt("Choose the grid size");

    while(rows > 100) {
        alert("Choose a number from 1 to 100!")
        rows = prompt("Choose the grid size");
    }
    if(rows === null) {
        rows = 50;
    };

    // Set properties
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", rows);

    // create each square
    for (i = 0; i < (rows*rows); i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
    };

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", changeColor);
    });
};

makeGrid();




function changeColor(e) {
    e.target.style.backgroundColor = color;
};

// add event listener to each of the buttons
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");
const reset = document.querySelector(".reset");
const newGrid = document.querySelector(".new-grid");

black.addEventListener("click", () => {color = "black"});
rainbow.addEventListener("click", () => {color = "red"});
erase.addEventListener("click", () => {color = "white"});
reset.addEventListener("click", () => {
    resetGrid();
    if(color === "white") {color = "black"};
});
newGrid.addEventListener("click", () => {
    makeGrid();
    color = "black";
});

function resetGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
};





