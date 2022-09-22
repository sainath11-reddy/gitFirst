let header = document.getElementById("header-title");
console.log(header);
// header.innerText="Hello";
// // header.textContent="Yes"
// header.innerHTML ="Hello <h2>Yes Please</h2>";

let head = document.getElementById("main-header");
console.log(head);
head.style.border="solid 10px black";
let itemHead = document.getElementsByClassName("title");
console.log(itemHead);
itemHead[0].style.fontWeight = "bold";
itemHead[0].style.color="green";
let items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(let i of items){
    i.style.fontWeight="bold";
}

let li = document.getElementsByTagName("li");
for(let i of li){
    i.style.color="red";
}