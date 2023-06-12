import{HttpClient} from "./server-client.js";

const client = new HttpClient();
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.mail.value;
    const password = loginForm.password.value;
    console.log(email)
    console.log(password)

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
    console.log(client.loginDataUrl)
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

