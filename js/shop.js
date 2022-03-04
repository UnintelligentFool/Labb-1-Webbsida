let cart = [];

if (sessionStorage.getItem("cart")) {

         cart = [JSON.parse(sessionStorage.getItem("cart"))];

}

function addToCart(product) {

    cart += "<li><p>" + product + "</p></li>";// class=\"hatedLi\"

    console.log(cart);

    //Källa: https://handyman.dulare.com/save-javascript-variables-between-pages/
    sessionStorage.setItem("cart", [JSON.stringify(cart)]);
    
    alert(`${product} lades till i kundvagnen!`);

}





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