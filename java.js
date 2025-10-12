
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
    e.target.style.background = "";
});

    sq.addEventListener("mouseleave", (e) => {
    e.target.style.background = "pink";
});

});

};

highlightTheGrids();


button.addEventListener("click", () => {

    const gridDivs = document.querySelectorAll("#row");

    gridDivs.forEach((g) => g.remove());

    let size = prompt("How many squares per side would you like?", "2-100");

    createRowsOfSquares(size);

    highlightTheGrids();

});
