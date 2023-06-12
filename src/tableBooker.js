import{HttpClient} from "./server-client.js";

const client = new HttpClient();

document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = document.getElementById("reservationForm");
    const name = form.name.value;
    const phone = form.phone.value;
    const person = form.person.value;
    const date = form["reservation-date"].value;
    const time = form["reservation-time"].value;
    const message = form.message.value;

    const reservationData = {
        name: name,
        phone: phone,
        person: person,
        date: date,
        time: time,
        message: message,
    };

    saveReservationData(reservationData);
    form.reset();
});

function saveReservationData(data) {
    fetch(client.bookingTableUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
}

