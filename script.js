// Define the number of columns and rows
let rows = prompt("Choose the grid size")
let columns = rows;
let squares = rows * columns;

// Create the variable that selects the container
const container = document.querySelector(".container");

// For the number of columns specified

function makeRows(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns);
    for (i = 0; i < (rows*columns); i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
    };
};

makeRows(rows, columns);

function changeColor(e) {
    e.target.style.backgroundColor = "black";
};

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("mouseover", changeColor);
});
