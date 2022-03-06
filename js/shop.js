let cart = [];

let amountToPay = 0;

let increasingNumber = 5000;

if (sessionStorage.getItem("cart")) {

         cart = [JSON.parse(sessionStorage.getItem("cart"))];

}

if (sessionStorage.getItem("amountToPay")) {

    amountToPay = JSON.parse(sessionStorage.getItem("amountToPay"));

}

function addToCart(product) {

    cart += [["<li id=\"" + increasingNumber + "\"><p>" + product + "</p><button id=\"" + increasingNumber + "\" class=\"payButtonClass\" value=\"Disintegrate\" onclick=\"deathStarActivate(" + increasingNumber + ", " + product[1] + ")\">-</button></li>"], ["<p class=\"pricePosition\">" + product[1] + "</p>"]];

    increasingNumber++;

    console.log("Item added." + cart);
 
    //Källa: https://handyman.dulare.com/save-javascript-variables-between-pages/
    sessionStorage.setItem("cart", [JSON.stringify(cart)]);
    
    alert(`${product[0]} lades till i kundvagnen!`);

    amountToPay += product[1];
    sessionStorage.setItem("amountToPay", [JSON.stringify(amountToPay)]);
    console.log("PAY UP: " + amountToPay);

}


function deathStarActivate(issuedTarget, unitPrice) {

    let republicScum = document.getElementById(issuedTarget);
    let deductFromPrice = unitPrice;

    console.log("issuedTarget = " + republicScum + " Status: ANNIHILATED");

    amountToPay -= deductFromPrice;
    console.log("PAY UP: " + amountToPay);

    republicScum.parentNode.removeChild(republicScum);

}

//window.location.href="shopping_Cart.html"; //Laddar om sidan

showItemsInCart();
function showItemsInCart() {

    let cartShowing = [JSON.parse(sessionStorage.getItem("cart"))];

    for (let i = 0; i < cartShowing.length; i++) {
        const cartItem = cartShowing[i];

        let theShow = cartItem;

        document.getElementById("listOfItemsInCart").innerHTML += theShow;
        console.log(theShow);

    }

}
