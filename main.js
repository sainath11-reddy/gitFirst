var form = document.querySelector("#addForm");
var itemList= document.querySelector("#items");

form.addEventListener("submit",addList);
itemList.addEventListener("click",del)
function addList(e){
    e.preventDefault();
    let te = document.querySelector('#item').value;
    let listTag = document.createElement("li");
    listTag.className="list-group-item";
    listTag.appendChild(document.createTextNode(te));
    var delButton = document.createElement('button');
    delButton.className='btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode("X"));
    listTag.appendChild(delButton);

    itemList.appendChild(listTag);
    // console.log("listTag");
}

function del(e){
    if(e.target.classList.contains("btn-danger")){
        if(confirm("Are you sure")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }


    }
}
console.log(itemList)


for(let i of itemList.children){
    let btn = document.createElement('button');
    btn.className="edit-button";
    btn.appendChild(document.createTextNode("edit"));
    i.appendChild(btn);
}

