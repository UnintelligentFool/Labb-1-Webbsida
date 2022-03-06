let cart = [];

let increasingNumber = 5000;

if (sessionStorage.getItem("cart")) {

         cart = [JSON.parse(sessionStorage.getItem("cart"))];

}

function addToCart(product) {

    //console.log("addToCart function entered. cart: " + cart);

    cart += "<li id=\"" + increasingNumber + "\"><p>" + product + "</p><button id=\"" + increasingNumber + "\" class=\"payButtonClass\" value=\"Disintegrate\" onclick=\"deathStarActivate(" + increasingNumber + ")\">-</button></li>";

    increasingNumber++;

    console.log("Item added." + cart);
    //console.log("Item added. cart: " + cart);
    //console.log(cart);

    //Källa: https://handyman.dulare.com/save-javascript-variables-between-pages/
    sessionStorage.setItem("cart", [JSON.stringify(cart)]);
    
    alert(`${product[0]} lades till i kundvagnen!`);

}


function deathStarActivate(issuedTarget) {

    let republicScum = document.getElementById(issuedTarget);

    console.log("issuedTarget = " + republicScum + " Status: ANNIHILATED");

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







// showItemsInCart();
// function showItemsInCart() {

//     let cartShowing = [JSON.parse(sessionStorage.getItem("cart"))];

//     for (let i = 0; i < cartShowing.length; i++) {
//         const cartItem = cartShowing[i];

//         let theShow = `<li><p>${cartItem}</p></li><br />`;

//         document.getElementById("listOfItemsInCart").outerHTML += theShow;
//         console.log(theShow);

//     }

// }