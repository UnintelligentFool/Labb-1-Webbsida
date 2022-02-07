// function showDropdown() {

//     //document.getElementById("dropdownForCourses").classList.toggle("hideCoursesDropdownList");

//     dropdownForCourses.classList.add("showCoursesDropdownList");
//     dropdownForCourses.classList.remove("hideCoursesDropdownList");
    /*
    if(isMenuShown == 1) {

        isMenuShown = 0;

    } else {

        isMenuShown = 1;

    }
*/
// }



// const hideDropdown = document.querySelector("dropdownForCourses");
// document.addEventListener("click", function(event){
//     if (event.target.closest("dropdownForCourses")) return
//     dropdownForCourses.classList.toggle("hideCoursesDropdownList");
// })




/*
//Nedan fungerar oavsett var på skärmen man klickar...
const hideDropdown = document.querySelector("dropdownForCourses");
document.addEventListener("click", function(event){
    if (event.target.closest("dropdownForCourses")) return
    dropdownForCourses.classList.toggle("hideCoursesDropdownList");
})
*/


/*
const hideDropdown = document.querySelector("dropdownForCourses");
let isMenuShown = true;

document.addEventListener("click", function(event){
    
    if(isMenuShown == true && event.target != dropdownButton || event.target != dropdownButton) {

        if (event.target.closest(hideDropdown)) return
        dropdownForCourses.classList.toggle("hideCoursesDropdownList");

        isMenuShown = false;

    }
})
*/



/*
var specifiedElement = document.getElementById('dropdownForCourses');
let isMenuShown = 0;

//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);

  if (!isClickInside) {
    if(isMenuShown == 1 && event.target == dropdownButton || event.target == dropdownButton) {
    dropdownForCourses.classList.toggle("hideCoursesDropdownList");
    
        isMenuShown = 0;
}
  }
});
*/





// const hideDropdown = document.querySelector("dropdownForCourses");
// let isMenuShown = false;

// document.addEventListener("click", function clickedSomewhere(event){
    
//     if(isMenuShown == true && event.target != dropdownButton || event.target != dropdownForCourses) {

//         if (event.target.closest(hideDropdown)) return
//         dropdownForCourses.classList.add("hideCoursesDropdownList");
//         dropdownForCourses.classList.remove("showCoursesDropdownList");

//         isMenuShown = false;

//     }
// })


/* document.addEventListener("click", function clickedSomewhere(event){
    
        if (event.target.closest(hideDropdown)) { return } else {
        dropdownForCourses.classList.add("hideCoursesDropdownList");
        dropdownForCourses.classList.remove("showCoursesDropdownList");
    }
}) */










































// window.onclick = function clickReceived(event) {

//     if(!event.target.matches(dropdownButton) && !event.target.matches(dropdownForCourses)) {

//         document.getElementById("dropdownForCourses").classList.toggle("hideCoursesDropdownList");

//     }

// }

//window.onclick = function clickReceived(event) {

    // if(!element.contains(event.target) && isVisible(element)) {

    //     //document.getElementById("dropdownForCourses").classList.toggle("hideCoursesDropdownList");

    //     if (dropdownForCourses.offsetWidth > 0 && element.offsetHeight > 0) {

    //         document.getElementById("dropdownForCourses").element.isVisible;

    //     }

    // }

//}

// function hideDropdown(dropdownForCourses) {
//         var style = window.getComputedStyle(dropdownForCourses);
//         return (style.display === 'none')
//     }

// function hideDropdown() {

//     var x = document.getElementById("dropdownForCourses");
//     if (window.getComputedStyle(x).display === "block") {

//         document.getElementById("dropdownForCourses").classList.toggle("hideCoursesDropdownList");

//     }

// }





// var dropdownList = document.getElementById("dropdownForCourses");
// if (window.getComputedStyle(dropdownList).display === "block") {
//     document.getElementById("dropdownForCourses").classList.toggle("hideCoursesDropdownList");
// }





// if(window.onclick) {
    
//     clickReceived();

// }

// function clickReceived() {

//     let dropdownList = document.getElementById("dropdownForCourses");
//     if (window.getComputedStyle(dropdownList).display === "block") {
    
//         document.getElementById("dropdownForCourses").classList.toggle("hideCoursesDropdownList");

//     }
// }




// if(!$('dropdownForCourses').is(':visible'))
// {
//     document.getElementById("dropdownForCourses").classList.toggle("hideCoursesDropdownList");
// }