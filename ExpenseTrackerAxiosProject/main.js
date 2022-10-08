var ul = document.getElementById("list");
var amt = document.getElementById("amt");
var desc = document.getElementById("desc");
var category = document.getElementById("category");
let count =0;
document.querySelector('#my-form').addEventListener("submit", fn);
document.addEventListener("DOMContentLoaded",showUserOnScreen);
async function fn(e){
    e.preventDefault();
    obj = {"amt":amt.value,
    "desc":desc.value,
    "category":category.value};
    // let objSerialized = JSON.stringify(obj);
    // let key = "userDetails"+count;
    // console.log(obj);
    let res = await axios.post("https://crudcrud.com/api/970829e3f8734c09b1054403afce2f1f/expenseTracker",obj);
    // count++;
    // console.log(res.data);
    showOutput(res.data);
}

function showOutput(obj){
    let li = document.createElement("li");
    let edit = document.createElement('button');
    let del = document.createElement('button');
    edit.className="btn btn-dark";
    del.className="btn btn-danger btn-sm float-right delete";
    // del.id = "delete";
    li.id=obj._id;
    del.appendChild(document.createTextNode("Delete"));
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(document.createTextNode(`${obj.amt} ${obj.category} ${obj.desc}`));
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);

}

let i =0;
async function showUserOnScreen(e){
    e.preventDefault();
    let res = await axios.get("https://crudcrud.com/api/970829e3f8734c09b1054403afce2f1f/expenseTracker");
    res.data.forEach(obj => {
        showOutput(obj);
    });
}
// while(localStorage.key(i)){
//     let key = localStorage.key(i);
//     let obj = JSON.parse(localStorage.getItem(key));
//     listItems(obj, key);
//     i+=1;
// }

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
        // if(confirm("Are you sure you want to delete")){
            deleteItem(e);
        // }
    }

}
async function deleteItem(e){
    
    let li = e.target.parentElement;
    try{
        let res = await axios.delete("https://crudcrud.com/api/970829e3f8734c09b1054403afce2f1f/expenseTracker/"+li.id);
        console.log(res);
        ul.removeChild(li);
    }catch(e){
        console.log(e)
    }

}