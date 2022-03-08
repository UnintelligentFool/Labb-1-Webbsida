let cart = [];

let amountToPay = 0;

let increasingNumber = 5000;

let showMessage = document.getElementById("paymentConfirmation").innerHTML = "<h4>" + amountToPay + "</h4>";
// let showMessage = document.getElementById("paymentConfirmation").outerHTML = "<h4>" + amountToPay + "</h4>";

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

    if(amountToPay > 0) {

        amountToPay -= deductFromPrice;
        console.log("PAY UP: " + amountToPay);

    }

    if(amountToPay < 0) {

        console.log("Your debt: " + amountToPay);

        amountToPay = 0;

        console.log("Debt settled: " + amountToPay);

    }

    // cart -= cart.indexOf([republicScum]);
    // cart.splice(republicScum, 1);
    // cart -= cart.splice(republicScum, 1);

    // //Källa: https://social.msdn.microsoft.com/Forums/en-US/f8795f0e-e482-455f-9ee9-780476f93552/delete-an-item-in-array-which-is-stored-in-localstorage?forum=asphtmlcssjavascript
    // let removeUnwantedItem = cart.filter(function (remove) {
    //     return remove != republicScum
    // });
    // sessionStorage.setItem("cart", [JSON.stringify(removeUnwantedItem)]);

    // //Källa: https://social.msdn.microsoft.com/Forums/en-US/f8795f0e-e482-455f-9ee9-780476f93552/delete-an-item-in-array-which-is-stored-in-localstorage?forum=asphtmlcssjavascript
    // whatever = cart.splice((cart.findIndex(remove => {return remove = republicScum})), 1);
    // sessionStorage.setItem("cart", [JSON.stringify(cart)]);








    
    sessionStorage.setItem("amountToPay", JSON.stringify(amountToPay));
    showMessage = document.getElementById("paymentConfirmation").innerHTML = "<h4>" + amountToPay + "</h4>";
    
    // console.log("Die " + republicScum + " in the name of God!");
    // window.sessionStorage.removeItem("cart[" + republicScum + "]");
    // console.log(republicScum + " died in the name of God!");

    republicScum.parentNode.removeChild(republicScum);

    //window.location.href="shopping_Cart.html";

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

// function updatePriceInPaymentMessage() {

//     youPaidMessage(amountToPay);

// }

youPaidMessage(/* amountToPay */);
function youPaidMessage(/* payThisAmount */) {

    // let amount = payThisAmount;

    showMessage = document.getElementById("paymentConfirmation").innerHTML = "<h4>" + amountToPay + "</h4>";
    // showMessage = document.getElementById("paymentConfirmation").outerHTML = "<h4>" + amount + "</h4>";

}