//Källa: https://www.youtube.com/watch?v=NxVCq4p0Kb0

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
    //document.forms[0].reset();
    document.querySelector("form").reset();

    // let showMessage = document.querySelector("#SentDataFeedback p");
    // showMessage.textContent = "\n" + JSON.stringify(coursesArray, "\t", 2); //ERROR!

    //let showMessage = document.querySelector("#SentDataFeedback p").textContent = "\n" + JSON.stringify(coursesArray, "\t", 2);

    //let formdata = JSON.stringify(coursesArray.serializeArray());

   
    //Källa: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file

let sendOn = JSON.stringify(coursesArray.serializeArray());

download(sendOn, 'listWithEducations.json', 'text/plain');


}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("addCourseSubmitButton").addEventListener("click", addCourseToJSON);

});



//Källa: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(coursesArray, 'listWithEducations.json', 'text/plain');



// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     //a.document = fileName;
//      a.download = fileName;
//     a.click();
//     URL.revokeObjectURL(a.href);
// }




// //Källa: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
// download(coursesArray, 'listWithEducations.json', 'text/plain');





// //Källa: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
// download(jsonData, 'listWithEducations.json', 'text/plain');