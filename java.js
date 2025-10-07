const container = document.querySelector("#container");


function createSquares(num) {

for (let i = 0; i < num; i++){
    const div = document.createElement("div");
    div.classList.add("a");

    container.appendChild(div)
}

}

createSquares(16);