var form = document.querySelector('#my-form');


form.addEventListener("submit", store);

function store(e){
    e.preventDefault();
    let obj = {
     name : document.querySelector("#name").value,
    email : document.querySelector("#email").value
    }
    let objSerialized = JSON.stringify(obj)
    localStorage.setItem("obj", objSerialized);
    console.log(localStorage.getItem("obj"));
}