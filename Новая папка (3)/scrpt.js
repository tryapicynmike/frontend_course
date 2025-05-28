let mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", function(){
    alert("Кнопка была нажата");
})

function handleclick(){
    alert("Кнопка 2 была нажата")
}

let mybutton2 = document.getElementById("mybutton2");

mybutton2.addEventListener("click" , function(){
    handleclick2("click me!!!!!!!!!!!!!!!!!")
})

function handleclick2(message){
    alert(message);
}

const lightbutton = document.getElementById("light")
const blackbutton = document.getElementById("black")

lightbutton.addEventListener("click", function(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
})
blackbutton.addEventListener("click", function(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
})