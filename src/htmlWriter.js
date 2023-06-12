import{HttpClient} from "./server-client.js";

const client = new HttpClient()
const listDiv = document.getElementById("listOfItems")
const list = await client.getAllDishes()
function init(){
    renderItems(list, listDiv)
}

$(() =>{
    init();
});

function renderItems(list, listDiv){
    let html = "<div class=\"container\">";
    function renderItem(item){
        html += "<li style='padding-top: 5rem'>"
        html += "<div class=\"menu-card hover:card\">"
        html += "<figure class=\"card-banner img-holder\" style=\"--width: 100; --height: 100;\">"
        html += `${item.picture}`
        html += "</figure>"
        html += "<div>"
        html += "<div class=\"title-wrapper\">"
        html += "<h3 class=\"title-3\">"
        html += `<a href=\"#\" class=\"card-title\">${item.name}</a>`
        html += "</h3>"
        html += `<span class=\"span title-2\">${item.price}</span>`
        html += "</div>"
        html += "<p class=\"card-text label-1\"> Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese. </p>"
        html += "<div style=\"clear: both;\"></div>"
        html += "</div>"
        html += "</div>"
        html += " </li>"
    }

    for(let item of list){
        renderItem(item)
    }
    html += "</div>"
    listDiv.innerHTML = html;
}