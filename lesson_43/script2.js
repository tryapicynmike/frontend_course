//1 Задание

let idear = document.getElementById("main-text");
idear.style.color = "blue";

//2 Задание
let elements = document.getElementsByClassName("highlight");
for (element of elements) {
    element.style.fontSize = "20px";
}

//3 Задание
let np = document.createElement('p')
np.innerText = "Привет из JS"
document.body.appendChild(np)