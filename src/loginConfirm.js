import{HttpClient} from "./server-client.js";

const client = new HttpClient();
const loginForm = document.getElementById("login-form");
let loggedInEmail = null;

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
    loginForm.reset();
    window.location.href = "index.html";


    updateLoggedInEmail();
});

function updateLoggedInEmail() {
    const currLogged = document.getElementById("currLogged");
    if (loggedInEmail) {
        currLogged.innerHTML = "Logged in as:" + loggedInEmail;
    } else {
        currLogged.innerHTML = "Not logged in";
    }
}

updateLoggedInEmail();


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

