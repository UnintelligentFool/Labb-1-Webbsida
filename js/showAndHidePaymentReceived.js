let showPayModal = document.getElementById("payButton");
//let hidePayModal = document.getElementById("paidButton");
let addPayModal = document.getElementById("payModal");


showPayModal.onclick = function() {

    payModal.style.display = "block";
    
}

window.onclick = function() {

    payModal.style.display = "none";
    
}