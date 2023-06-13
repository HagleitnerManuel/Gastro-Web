import{HttpClient} from "./server-client.js";

const client = new HttpClient();
const loginForm = document.getElementById("login-form");
let loggedInEmail = null;
let emailTrue = "";

async function updateLoggedInEmail(email) {
    const data = await getAllLogin();
    let i = 0;
    let sd = "";
    console.log(data)
    for (let login of data){
        if (i === data.length - 1){
            sd = login.email;
        }
        i++;
    }
    const currLogged = document.getElementById("currLogged");
    console.log(emailTrue);
    if (sd !== "") {
        currLogged.innerHTML += sd;
    } else {
        currLogged.innerHTML += "Not logged in";
    }
}

document.addEventListener("DOMContentLoaded", () => updateLoggedInEmail())

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.mail.value;
    const password = loginForm.password.value;

    emailTrue = email;
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
    console.log(loggedInEmail)
    updateLoggedInEmail(loggedInEmail);

});

function saveLoginData(loginData) {
    fetch(client.loginDataUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    })
}

async function getAllLogin(){
    const response = await fetch(client.loginDataUrl);
    if (!response.ok){
        throw new Error("Error!")
    }
    return await response.json();
}

