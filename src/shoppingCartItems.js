import {HttpClient} from "./server-client.js";

let client = new HttpClient()
let list = [];
const listDiv = $("#listOfItems")

//---------
// MenuTuples
//---------
const greekSalad = {
    "Name": "Greek Salad",
    "Price": "$25.50"
}
const lasagne = {
    "Name": "Lasagne",
    "Price": "$40.00"
}
const butternutPumpkin = {
    "Name": "Butternut Pumpkin",
    "Price": "$10.00"
}
const tokusenWagyu = {
    "Name": "Tokusen Wagyu",
    "Price": "$39.00"
}
const olivasRellenas = {
    "Name": "Olivas Rellenas",
    "Price": "$25.00"
}
const opuFish = {
    "Name": "Opu Fish",
    "Price": "$49.00"
}
const italianFishSalad = {
    "Name": "Italian Fish Salad",
    "Price": "$27.50"
}
const capressePasta = {
    "Name": "Capresse-Pasta",
    "Price": "$34.00"
}
const aviableFood = [{
    greekSalad,
    lasagne,
    butternutPumpkin,
    tokusenWagyu,
    olivasRellenas,
    opuFish,
    italianFishSalad,
    capressePasta
}
]

//-------
// logic
//-------

function init(){

}

$(() =>{
    init();
});

function renderItems(list, listDiv){
    let html;
    function renderItem(item){
        html += "<li>"
        html += "<div class=\"menu-card hover:card\">"
        html += "<figure class=\"card-banner img-holder\" style=\"--width: 100; --height: 100;\">"
        html += `<img src=\"./src/images/menu-1.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"${item["Name"]}\" class=\"img-cover\">`
        html += "</figure>"
        html += "<div>"
        html += "<div class=\"title-wrapper\">"
        html += "<h3 class=\"title-3\">"
        html += `<a href=\"#\" class=\"card-title\">${item["Name"]}</a>`
        html += "</h3>"
        html += `<span class=\"span title-2\">${item["Price"]}</span>`
        html += "</div>"
        html += "<p class=\"card-text label-1\"> Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese. </p>"
        html += "<div style=\"clear: both;\"></div>"
        html += "</div>"
        html += "</div>"
        html += " </li>"
    }

    for(let item of list){
        for (let food of aviableFood){
            if(item === food["Name"]){
                renderItem(food)
            }
        }
    }
    listDiv.html(html);
}

const menuContainer = document.querySelector('.menu-container');

// Get only the buttons within the specific parent element
const buttons = menuContainer.querySelectorAll('btn btn-primary');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = button.id;
        console.log('Clicked button ID:', buttonId);
        list.push(buttonId)
        renderItems(list, listDiv)
    });
});



/*const buttons = document.get('btn btn-primary');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const buttonId = buttons[i].id;
        list.add(buttonId)
        renderItems(list, $("#listOfItems"))
    });
}*/
