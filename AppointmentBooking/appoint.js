var form = document.querySelector('#my-form');


form.addEventListener("submit", store);

function store(e){
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

}