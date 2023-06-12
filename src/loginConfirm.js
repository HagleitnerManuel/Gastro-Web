import{HttpClient} from "./server-client.js";

const client = new HttpClient();
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    const loginData = {
        email: email,
        password: password,
    };

    saveLoginData(loginData);
    loginForm.reset();
});

function saveLoginData(loginData) {
    fetch(client.loginDataUrl, {
        method: "PATCH",
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
        .catch((error) => {
            alert("An error occurred while saving login data.");
            console.error(error);
        });
}

