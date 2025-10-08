const container = document.querySelector("#container");

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