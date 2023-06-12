import{HttpClient} from "./server-client.js";

let list = [];
const client = new HttpClient()

//---------
// MenuTuples
//---------
const greekSalad = {
    "Name": "Greek Salad",
    "Price": "$25.50",
    "Picture": "<img src=\"./src/images/menu-1.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Greek Salad\" class=\"img-cover\">"
}
const lasagne = {
    "Name": "Lasagne",
    "Price": "$40.00",
    "Picture": "<img src=\"./src/images/menu-2.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Lasagne\"\nclass=\"img-cover\">"
}
const butternutPumpkin = {
    "Name": "Butternut Pumpkin",
    "Price": "$10.00",
    "Picture": "<img src=\"./src/images/menu-3.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Butternut Pumpkin\"\nclass=\"img-cover\">"
}
const tokusenWagyu = {
    "Name": "Tokusen Wagyu",
    "Price": "$39.00",
    "Picture": "<img src=\"./src/images/menu-4.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Tokusen Wagyu\"\nclass=\"img-cover\">"
}
const olivasRellenas = {
    "Name": "Olivas Rellenas",
    "Price": "$25.00",
    "Picture": "<img src=\"./src/images/menu-5.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Olivas Rellenas\"\nclass=\"img-cover\">"
}
const opuFish = {
    "Name": "Opu Fish",
    "Price": "$49.00",
    "Picture": "<img src=\"./src/images/menu-6.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Opu Fish\"\nclass=\"img-cover\">"
}
const italianFishSalad = {
    "Name": "Italian Fish Salad",
    "Price": "$27.50",
    "Picture": "<img src=\"./src/images/menu-7.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Italian Salad\"\nclass=\"img-cover\">"
}
const capressePasta = {
    "Name": "Capresse-Pasta",
    "Price": "$34.00",
    "Picture": "<img src=\"./src/images/menu-8.png\" width=\"100\" height=\"100\" loading=\"lazy\" alt=\"Capresse-Pasta\"\nclass=\"img-cover\">"
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

function selectFood(food, buttonId){
    switch (buttonId){
        case food.greekSalad.Name:{
            client.addNewDish(food.greekSalad.Name, food.greekSalad.Price, food.greekSalad.Picture, () => {})
            return food.greekSalad
        }
        case food.capressePasta.Name:{
            client.addNewDish(food.capressePasta.Name, food.capressePasta.Price, food.capressePasta.Picture, () => {})
            return food.capressePasta
        }
        case food.opuFish.Name:{
            client.addNewDish(food.opuFish.Name, food.opuFish.Price, food.opuFish.Picture, () => {})
            return food.opuFish
        }
        case food.lasagne.Name:{
            client.addNewDish(food.lasagne.Name, food.lasagne.Price, food.lasagne.Picture, () => {})
            return food.opuFish
        }
        case food.olivasRellenas.Name:{
            client.addNewDish(food.olivasRellenas.Name, food.olivasRellenas.Price, food.olivasRellenas.Picture, () => {})
            return food.olivasRellenas
        }
        case food.italianFishSalad.Name:{
            client.addNewDish(food.italianFishSalad.Name, food.italianFishSalad.Price, food.italianFishSalad.Picture, () => {})
            return food.italianFishSalad
        }
        case food.tokusenWagyu.Name: {
            client.addNewDish(food.tokusenWagyu.Name, food.tokusenWagyu.Price, food.tokusenWagyu.Picture, () => {})
            return food.tokusenWagyu
        }
        case food.butternutPumpkin.Name:{
            client.addNewDish(food.butternutPumpkin.Name, food.butternutPumpkin.Price, food.butternutPumpkin.Picture, () => {})
            return food.butternutPumpkin
        }
    }
}

const menuContainer = document.querySelector('.menu-container');

// Get only the buttons within the specific parent element
const buttons = menuContainer.querySelectorAll('.btn');

// Add event listener to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        e.preventDefault()
        const buttonId = buttons[i].id;
        let avFood
        for (let food of aviableFood) {
            avFood = selectFood(food, buttonId)
            if(avFood.Name === buttonId){
                break;
            }
        }
        list.push(avFood)
    });
}