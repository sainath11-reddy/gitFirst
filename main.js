var form = document.querySelector("#addForm");
var itemList= document.querySelector("#items");
var desText = document.createElement("input");
desText.setAttribute("type","text");
desText.className="form-control mr-2";
desText.id="description";
var sub = document.getElementsByClassName('btn btn-dark')[0];
// console.log(sub);
form.insertBefore(desText,sub);

form.addEventListener("submit",addList);
itemList.addEventListener("click",del)
function addList(e){
    e.preventDefault();
    let te = document.querySelector('#item').value;
    let listTag = document.createElement("li");
    listTag.className="list-group-item";
    listTag.appendChild(document.createTextNode(te + " "+ desText.value));
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
// console.log(itemList)


for(let i of itemList.children){
    let btn = document.createElement('button');
    btn.className="edit-button";
    btn.appendChild(document.createTextNode("edit"));
    i.appendChild(btn);
}

var filter = document.getElementById("filter");

filter.addEventListener("keyup", filtering);

function filtering(e){
    let text =e.target.value.toLowerCase();
    console.log(itemList.children);
    Array.from(itemList.children).forEach(function(item){
        var itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!=-1){
            item.style.display ='block'; 
        }else{
            item.style.display='none';
        }
    })
    
}

