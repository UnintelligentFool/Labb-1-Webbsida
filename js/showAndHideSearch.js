let showSearchBox = document.getElementById("showSortingWindowButton");
let hideSearchBox = document.getElementById("hideSortingWindowButton");
let searchBox = document.getElementById("coursesDropdown");


showSearchBox.onclick = function() {

    searchBox.style.display = "block";
    showSearchBox.style.display = "none";

}

hideSearchBox.onclick = function() {

    searchBox.style.display = "none";
    showSearchBox.style.display = "block";

}