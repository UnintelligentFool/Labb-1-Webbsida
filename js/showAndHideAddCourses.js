let showAddCoursesModal = document.getElementById("addCourseButtonID");
let hideAddCoursesModal = document.getElementById("addCourseSubmitButton");
let addCoursesModal = document.getElementById("addCourseModal");


showAddCoursesModal.onclick = function() {

    addCoursesModal.style.display = "block";
    // showAddCoursesModal.style.display = "none";

}

hideAddCoursesModal.onclick = function() {

    addCoursesModal.style.display = "none";
    // showAddCoursesModal.style.display = "block";

}