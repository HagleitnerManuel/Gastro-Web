import{HttpClient} from "./server-client";

let list = [];
const listDiv = $("#listOfItems")
const client = new HttpClient()

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
const buttons = menuContainer.querySelectorAll('.btn');


// Add event listener to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const buttonId = buttons[i].id;
        console.log('Clicked button ID:', buttonId);
        for (let food of aviableFood){
            if(food["Name"] === buttonId){
                client.addNewDish(food["Name"], food["Price"], () => {})
            }
        }
        list.push(buttonId)
        //renderItems(list, listDiv)
    });
}