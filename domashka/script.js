let button = document.createElement('button')
button.innerText = "click me!!!"
button.style.color = 'green'
document.body.appendChild(button)

button.addEventListener("click",function(){
    let h1 = document.createElement('h1')
    h1.innerText = ("Добро пожаловать!")
    document.body.appendChild(h1)
})

const redbutton = document.getElementById("red")
const greenbutton = document.getElementById("green")
const bluebutton = document.getElementById("blue")

redbutton.addEventListener("click", function(){
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'blue';
})
greenbutton.addEventListener("click", function(){
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'red';
})
bluebutton.addEventListener("click", function(){
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'green';
})