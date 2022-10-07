var form = document.querySelector('#my-form');
var ul = document.getElementById("users");
var n1 = document.querySelector("#name");
var e1 = document.querySelector("#email");
let i=0;
form.addEventListener("submit", saveToLocalStorage);
document.addEventListener("DOMContentLoaded",showUserOnScreen);
function showNewUserOnScreen(obj){
    let li = document.createElement("li");
    li.id = obj.id;
    console.log(obj);
    li.appendChild( document.createTextNode(obj["name"] + ' '+obj["email"]));
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

    async function saveToLocalStorage(e){
        e.preventDefault();
        obj={
            name:n1.value,
            email:e1.value
        }
        const serializedObj = JSON.stringify(obj);
        try{
        let res = await axios.post("https://crudcrud.com/api/970829e3f8734c09b1054403afce2f1f/appointment",obj);
        showNewUserOnScreen(res.data);
        }catch(err){
            console.log(err);
        }
        
    
    
    }

async function showUserOnScreen(e){
    e.preventDefault();
    let res = await axios.get("https://crudcrud.com/api/970829e3f8734c09b1054403afce2f1f/appointment");
    res.data.forEach(obj => {
        showNewUserOnScreen(obj);
    });
}