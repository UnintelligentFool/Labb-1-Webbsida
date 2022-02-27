//Källa: https://www.youtube.com/watch?v=NxVCq4p0Kb0

//Källa: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file


let coursesArray = [];

const addCourseToJSON = (stopButtonRefreshing) => {

    stopButtonRefreshing.preventDefault();

    let course = {

        id: Date.now(),
        kursnummer: document.getElementById("kursnummer").value,
        kurstitel: document.getElementById("kurstitel").value,
        kursbeskrivning: document.getElementById("kursbeskrivning").value,
        kurslangd: document.getElementById("kurslangd").value

    }

    coursesArray.push(course);
    document.querySelector("form").reset();

    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(coursesArray)], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = "../listWithEducations.json";
    a.click();

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("addCourseSubmitButton").addEventListener("click", addCourseToJSON);

});



//Källa: https://code-boxx.com/create-save-files-javascript/

// var data = new FormData();
// data.append("upfile", new Blob(["CONTENT"], {type: "text/plain"}));
// fetch("SERVER.SCRIPT", { method: "POST", body: data });