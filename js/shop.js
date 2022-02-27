//let addToCart = document.querySelectorAll("courseToCart").addEventListener("click", courseToBeInCart());
//courseToBeInCart

let cart = [];

if (sessionStorage.getItem("cart")) {

         cart = JSON.parse(sessionStorage.getItem("cart"));

}

function addToCart(product) {

    cart += product;

    console.log(cart);

    //Källa: https://handyman.dulare.com/save-javascript-variables-between-pages/
        sessionStorage.setItem("cart", JSON.stringify(cart));
    
    

    //console.log(product);

    //alert(`You clicked ${product}`);

}














//    //Källa: https://handyman.dulare.com/save-javascript-variables-between-pages/
//    if(typeof(sessionStorage) != 'undefined') {
//     sessionStorage.setItem("cartInventory", JSON.stringify());
// }



// if (sessionStorage.getItem("cartInventory")) {

//     cart = JSON.parse(sessionStorage.getItem("cartInventory"));

// }












// https://handyman.dulare.com/save-javascript-variables-between-pages/

// sessionStorage.setItem("cartInventory", JSON.stringify());

// if (sessionStorage.getItem("cartInventory")) {
//     cartContent = JSON.parse(sessionStorage.getItem("cartInventory"));
// }










// https://handyman.dulare.com/save-javascript-variables-between-pages/

// sessionStorage.setItem("productsSort", JSON.stringify(sortOrder));

// if (sessionStorage.getItem("productsSort")) {
//     sortOrder = JSON.parse(sessionStorage.getItem("productsSort"));
// }