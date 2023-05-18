const login = document.getElementById("login_form")
const greet = document.getElementById("greeting")

function hello (event) {
    event.preventDefault();
    const name = login.firstElementChild.value;
    login.classList.add("hidden");
    greet.classList.remove("hidden");
    greet.innerText = `Hello, ${name}!`; 
};

login.addEventListener("submit", hello);