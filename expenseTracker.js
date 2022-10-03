
var ul = document.getElementById("list");
var amt = document.getElementById("amt");
var desc = document.getElementById("desc");
var category = document.getElementById("category");
let count =0;
document.querySelector('#my-form').addEventListener("submit", fn);
function fn(e){
    e.preventDefault();
    obj = {"amt":amt.value,
    "desc":desc.value,
    "category":category.value};
    let objSerialized = JSON.stringify(obj);
    let key = "userDetails"+count;
    localStorage.setItem(key,objSerialized);
    count++;
    listItems(obj,key );
}

function listItems(obj,key){
    let li = document.createElement("li");
    let edit = document.createElement('button');
    let del = document.createElement('button');
    edit.className="btn btn-dark";
    del.className="btn btn-danger btn-sm float-right delete";
    // del.id = "delete";
    li.id=key;
    del.appendChild(document.createTextNode("Delete"));
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(document.createTextNode(`${obj.amt} ${obj.category} ${obj.desc}`));
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);

}

let i =0;
while(localStorage.key(i)){
    let key = localStorage.key(i);
    let obj = JSON.parse(localStorage.getItem(key));
    listItems(obj, key);
    i+=1;
}

ul.addEventListener("click",check);

function check(e){
    if(e.target.classList.contains("btn-dark")){
        let li = e.target.parentElement;
        let arr = li.firstChild.textContent.split(' ');
        amt.value=arr[0];
        category.value=arr[1];
        desc.value=arr[2];
        deleteItem(e);
    }
    else{
        if(confirm("Are you sure you want to delete")){
            deleteItem(e);
        }
    }

}
function deleteItem(e){
    
    let li = e.target.parentElement;
    ul.removeChild(li);
}