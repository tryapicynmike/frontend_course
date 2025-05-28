console.log(document.getElementById('title'))
console.log(document.getElementById('title').innerHTML)

let title = document.getElementById("title");
console.log(title.innerHTML)
console.log(title)

let description = document.getElementsByClassName('description')
console.log(description)
console.log(description[0].innerHTML)
console.log(description[1].innerHTML)
let i_teg = document.getElementsByTagName('i')
console.log(i_teg)
console.log(i_teg[0].innerHTML)
console.log(i_teg[1].innerHTML)
let qclass = document.querySelector('.description')
console.log(qclass)
console.log(qclass.innerHTML)
let qid = document.querySelector('.description')
console.log(qid)
console.log(qid.innerHTML)
let content = document.getElementById('content')
console.log(content)
console.log(content.innerHTML)
console.log(content.innerText)

title.style.color = "red";
description[0].style.fontSize = "30px";
description[0].style.marginBottom = "20px"

let primer = document.getElementById('primer');

primer.style.color = "green";
primer.style.fontSize = "30px";
primer.style.fontWeight = "bold";
primer.style.textAlign = "center";

let np = document.createElement('p')
np.innerText = "This is a new paragraph"
np.style.color = 'green'
document.body.appendChild(np)

primer.remove()