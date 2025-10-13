
const container = document.querySelector("#container");
const body = document.querySelector("body");

const buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "forButton");
body.insertBefore(buttonDiv, container);

const button = document.createElement("button");
button.textContent = "GRID";

buttonDiv.appendChild(button);


function createRowsOfSquares(num){
    for (let i = 0; i < num; i++){
        const row = document.createElement("div");
        row.setAttribute("id", "row");
        container.appendChild(row);

        for (let j = 0; j < num; j++){
            const square = document.createElement("div");
            square.classList.add("box");
            row.appendChild(square);
        }
    }
}

createRowsOfSquares(16);




function highlightTheGrids() {

const boxes = document.querySelectorAll(".box");



boxes.forEach((sq) => {
    sq.addEventListener("mouseenter", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    e.target.style.background = `rgb(${r}, ${g}, ${b})`;
});
    sq.addEventListener("mouseleave", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    e.target.style.background = `rgb(${r}, ${g}, ${b})`;
});
});

};

highlightTheGrids();

button.addEventListener("click", () => {
    const gridDivs = document.querySelectorAll("#row");
    gridDivs.forEach((g) => g.remove());
    let size = prompt("How many squares per side would you like?", "2-100");

    if (size > 100) {
        askAgain();
    } else {
        createRowsOfSquares(size);
        highlightTheGrids();
    }
});

function askAgain(){
    let num = prompt("Up to 100 only, input another number");
    if (num <= 100 ) {
        createRowsOfSquares(num);
        highlightTheGrids();
    } else {
        askAgain();
    }
}

