let showPayModal = document.getElementById("payButton");
let hidePayModal = document.getElementById("payModal");
let addPayModal = document.getElementById("payModal");


showPayModal.onclick = function() {

    addPayModal.style.display = "block";
    //updatePriceInPaymentMessage()

}

hidePayModal.onclick = function() {

    addPayModal.style.display = "none";

}