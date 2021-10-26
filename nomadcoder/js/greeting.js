const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username"

// first Login
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME, loginInput.value);
    paintGreeting();
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME);

// after Login
if (saveUsername === null) {
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show greeting
    paintGreeting();
}