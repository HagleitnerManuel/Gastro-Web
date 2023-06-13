import{HttpClient} from "./server-client.js";

const client = new HttpClient()
const listDiv = document.getElementById("listOfItems")
const priceDiv = document.getElementById("totalPrice")
const list = await client.getAllDishes()
let totalCost = 0
function init(){
    renderItems(list, listDiv)
}

$(() =>{
    init();
});

function renderItems(list, listDiv){
    let html = "<div class=\"container\">";
    let otherHtml = "<div style=\"display:flex; flex-direction:column\">";
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
        html += `<p class=\"card-text label-1\"> ${item.description} </p>`
        html += "<div style=\"clear: both;\"></div>"
        html += "</div>"
        html += "</div>"
        html += " </li>"
    }

    for(let item of list){
        renderItem(item)
        let trimmedPrice = ""
        for (let i = 1; i < item.price.length; i++){
            trimmedPrice += item.price[i]
        }
        totalCost += parseInt(trimmedPrice, 10)
    }
    html += "</div>"
    otherHtml += `<span class=\"span title-2\" style="color: hsl(38, 61%, 73%); font-size: xx-large">$${totalCost.toFixed(2)}</span>`
    otherHtml += "<button style='content-visibility: visible'><a href=login.html class=\"btn btn-secondary\">" +
        "        <span class=\"text text-1\">Buy Now</span><span class=\"text text-2\" aria-hidden=\"true\">Buy Now</span>" +
        "    </a></button>"
    otherHtml += "</div>";
    priceDiv.innerHTML = otherHtml
    listDiv.innerHTML = html;
}