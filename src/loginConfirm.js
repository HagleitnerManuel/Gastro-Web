import{HttpClient} from "./server-client.js";

const client = new HttpClient();
const loginForm = document.getElementById("login-form");
let check;
let loggedInEmail = null;

function updateLoggedInEmail() {
    const currLogged = document.getElementById("currLogged");
    if (loggedInEmail !== null) {
        currLogged.innerHTML += loggedInEmail;
    } else {
        currLogged.innerHTML += "Not logged in";
    }
}

document.addEventListener("DOMContentLoaded", () => updateLoggedInEmail())

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.mail.value;
    const password = loginForm.password.value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    const loginData = {
        email: email,
        password: password,
    };

    saveLoginData(loginData);
    loggedInEmail = email;
    window.location.href = "index.html";
    updateLoggedInEmail();




});

function saveLoginData(loginData) {
    fetch(client.loginDataUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    })
        .then((response) => {
            if (response.ok) {
                alert("Login data saved successfully.");
            } else {
                alert("Failed to save login data.");
            }
        })
}

