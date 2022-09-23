var form = document.querySelector('#my-form');


form.addEventListener("submit", store);

function store(e){
    e.preventDefault();
    let n1 = document.querySelector("#name").value;
    let e1 = document.querySelector("#email").value;
    let obj = {
     name : n1,
    email :e1
    }
    let objSerialized = JSON.stringify(obj)
    localStorage.setItem("userDetails"+e1+n1, objSerialized);
    // console.log(localStorage.getItem("obj"));
    let li = document.createElement("li");
    li.textContent = obj.name + ' '+obj.email;
    li.classNme="item";
    let ul = document.getElementById("users");
    ul.appendChild(li);
}

let i=0;
while(localStorage.key(i)){
    let v=JSON.parse(localStorage.getItem(localStorage.key(i)));
    let li = document.createElement("li");
    li.textContent = v.name + ' '+v.email;
    li.classNme="item";
    let ul = document.getElementById("users");
    ul.appendChild(li);
    i+=1;
}

