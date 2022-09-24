var form = document.querySelector('#my-form');
var ul = document.getElementById("users");
var n1 = document.querySelector("#name");
var e1 = document.querySelector("#email");
let i=0;
while(localStorage.key(i)){
    let v=JSON.parse(localStorage.getItem(localStorage.key(i)));
    let li = document.createElement("li");
    li.id = v.email;
    li.appendChild( document.createTextNode(v.name + ' '+v.email));
    li.className="list-group-item";
    let edit = document.createElement("button");
    edit.className="btn btn-dark";
    edit.appendChild(document.createTextNode("edit"));
    li.appendChild(edit);
    let btn = document.createElement("button")
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);
    
    ul.appendChild(li);
    i+=1;
}
form.addEventListener("submit", store);
ul.addEventListener("click",clickItem);

function store(e){
    e.preventDefault();
    
    let obj = {
     name : n1.value,
    email :e1.value
    }
    
    let objSerialized = JSON.stringify(obj);
    if(localStorage.getItem("userDetails"+e1)){
        let id = obj.email;
        let node = document.getElementById(id);
        ul.removeChild(node);
    }
    localStorage.setItem("userDetails"+e1, objSerialized);
    // console.log(localStorage.getItem("obj"));
    let li = document.createElement("li");
    li.id = obj.email;
    li.appendChild( document.createTextNode(obj.name + ' '+obj.email));
    li.className="list-group-item";
    let edit = document.createElement("button");
    edit.className="btn btn-dark";
    edit.appendChild(document.createTextNode("edit"));
    li.appendChild(edit);
    let btn = document.createElement("button");
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode("X"));

    li.appendChild(btn);
    ul.appendChild(li);

}




function clickItem(e){
    if(e.target.classList.contains("btn-danger")){
        if(confirm("Are you sure")){
        deleteItem(e);
        }
    }
    if(e.target.classList.contains("btn-dark")){
        let li = e.target.parentElement;
        let arr = li.firstChild.textContent.split(" ");       
        n1.value = arr[0];
        e1.value=arr[1];
        deleteItem(e)
    }
}

function deleteItem(e){
    
        let li = e.target.parentElement;
        ul.removeChild(li);
    
}