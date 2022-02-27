let cart = [];

if (sessionStorage.getItem("cart")) {

         cart = JSON.parse(sessionStorage.getItem("cart"));

}

function addToCart(product) {

    cart += product;

    console.log(cart);

    //Källa: https://handyman.dulare.com/save-javascript-variables-between-pages/
    sessionStorage.setItem("cart", JSON.stringify(cart));
    
    alert(`${product} lades till i kundvagnens array!`);

}

showItemsInCart();
function showItemsInCart() {

    let cartShowing = JSON.parse(sessionStorage.getItem("cart"));

    for (let i = 0; i < cartShowing.length; i++) {
        const cartItem = cartShowing[i];

        let theShow = `<li><p>${cartShowing}</p></li>`

        document.getElementById("listOfItemsInCart").innerHTML += theShow;

    }

}