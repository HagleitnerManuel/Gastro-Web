import {HttpClient} from "./server-client.js";

let client = new HttpClient()
let list = await client.getAllDishes()

function init(){
    let listDiv = $("#listOfItems")

    renderItems(list, listDiv)


}

$(() =>{
    init();
});
function addNewDish(name, price){
    client.addNewDish(name, price, () => {});
}

function renderItems(list, listDiv){
    function renderItem(item){
        let html = `<li id="${cnt++}">${item}</li>`;
        return html;
    }

    let html = "<ul>";
    for (let item of list){
        html += renderItem(item);
    }

    html += "</ul>";
    listDiv.html(html);
}

