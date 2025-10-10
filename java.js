const container = document.querySelector("#container");

const buttonContainer = document.createElement("div");
container.appendChild(buttonContainer);

const button = document.createElement("button");
button.textContent = "GRID";
button.style.marginBottom = "5px";
buttonContainer.appendChild(button);


function createRowOfSquares(num){
    for (let i = 0; i < num; i++){
        const row = document.createElement("div");
        container.appendChild(row);

        for (let j = 0; j < num; j++){
            const square = document.createElement("div");
            square.classList.add("box");
            row.appendChild(square);
        }
    }
}

createRowOfSquares(16);


const gridDivs = document.querySelectorAll(".box");


gridDivs.forEach((sq) => {

    sq.addEventListener("mouseenter", (e) => {
    e.target.style.background = "";
});

    sq.addEventListener("mouseleave", (e) => {
    e.target.style.background = "pink";
});

});


button.addEventListener("click", () => {
    //let num = +prompt("How many squares would you like per side?", "2-100");
    
});