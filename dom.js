let header = document.getElementById("header-title");
console.log(header);
// header.innerText="Hello";
// // header.textContent="Yes"
// header.innerHTML ="Hello <h2>Yes Please</h2>";

// let head = document.getElementById("main-header");
// console.log(head);
// head.style.border="solid 10px black";
// let itemHead = document.getElementsByClassName("title");
// console.log(itemHead);
// itemHead[0].style.fontWeight = "bold";
// itemHead[0].style.color="green";
// let items = document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor="green";
// for(let i of items){
//     i.style.fontWeight="bold";
// }

// let li = document.getElementsByTagName("li");
// for(let i of li){
//     i.style.color="red";
// }

// let secondLi = document.querySelector("li:nth-child(2)");
// secondLi.style.backgroundColor="green";
// let thirdLi = document.querySelector(".list-group-item:nth-child(3)");
// thirdLi.style.color="white";

// let items = document.querySelectorAll("li");
// items[1].style.color="green";
// let odd = document.querySelectorAll("li:nth-child(odd)");
// for(let i of odd){
//     i.style.backgroundColor="green";
// }

// let textField = document.querySelector("input");
// console.log(textField.parentElement);
// textField.parentElement.style.backgroundColor="grey";

let forms = document.querySelector("form");
console.log(forms.children);
console.log(forms.lastElementChild);

// console.log(forms.firstChild);
// console.log(forms.firstElementChild);
// console.log(forms.nextElementSibling);
// console.log(forms.nextSibling);
// forms.nextElementSibling.innerText = "Yoo";
// forms.nextElementSibling.style.color="red";
// console.log(forms.previousSibling);
// console.log(forms.previousElementSibling);
// forms.previousElementSibling.innerText = "Yoo";
// forms.previousElementSibling.style.color="yellow";

let div = document.createElement("div");
div.className="caption";
div.id="caption1";
div.setAttribute("title","Hello div");
let divText = document.createTextNode("HEllo");
div.appendChild(divText);

let container = document.querySelector("header .container ");
let head = document.querySelector("#header-title");
container.insertBefore(div,head);

let h1 = document.createElement("h4");
let text = document.createTextNode("HEllo");
h1.appendChild(text);

let head1 = document.querySelectorAll("h2")[1];
console.log(head1);
let cont = document.querySelector("div #main");
console.log(cont);

// let ul = document.querySelector("ul");

cont.insertBefore(h1, head1)

