console.log("Hello, World!This is my first lesson with java script");
var myname="Mike Tryapicyn";
console.log(myname);
var myage  = 11;
console.log(myage);

let myCity = "St.Petersburg"
console.log(myCity);
myCity = "Volgograd"
console.log('Пример после изменения данных',myCity)
const myCountry = "Russia"
console.log(myCountry)
let integernumber = 42;
console.log(integernumber);
let floatnumber = 3.14;
console.log(floatnumber);
let stringnumber = '123.45';
console.log(stringnumber);
let booleanValue = true;
console.log(booleanValue);
let nullValue = null;
console.log(nullValue);
let underfinedValue;
console.log(underfinedValue);
let objectValue = { name:"mike" , age: 11 };
console.log(objectValue);
console.log(objectValue.name);
console.log(objectValue["age"]);


let arrayValue = [1,2,3,4,5]
console.log(arrayValue);
console.log(arrayValue[0]);
console.log(arrayValue.length);
console.log(arrayValue[0] + arrayValue[1]);
console.log(arrayValue[0] + arrayValue[1] + arrayValue[2]);

let clickCout = 0;

document.addEventListener("DOMContentLoaded" , () => {
    const button = document.createElement("button");
    button.textContent = "Click me!";
    document.body.appendChild(button);

    button.addEventListener("click", () => {
        clickCout++;
        console.log("Button clicked", clickCout, "times");
    });
});