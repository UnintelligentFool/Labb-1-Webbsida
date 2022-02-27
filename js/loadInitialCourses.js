
let coursesArray = [];

let importedJSON = "";


//Källa: https://poopcode.com/import-json-from-a-local-file-and-assign-to-variable-in-javascript/
// fetch("../json/listWithEducations.json")
// .then(mockResponses => {
//    return mockResponses.json();
// })
// .then(data => console.log(data));




// let importedJSON = fetch("../json/listWithEducations.json").then(jsonList => {

//     return jsonList.json();

// }).then(parseJSON => JSON.parse(parseJSON)).then(shit => console.log(shit)); //JSON.parse("../json/listWithEducations.json");




// let importedJSON = fetch("../json/listWithEducations.json").then(jsonList => {

//     return jsonList.json();

// });//.then(shit => console.log(shit)); //JSON.parse("../json/listWithEducations.json");




// populate();

// //Källa: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// async function populate() {

//     const requestURL = '../json/listWithEducations.json';
//     const request = new Request(requestURL);
  
//     const response = await fetch(request);
//     const superHeroes = await response.json();
  
//     console.log(superHeroes);
  
//   }







// importingJSON();

// //Källa: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// async function importingJSON() {

//     const importedJson = await (await fetch(new Request('../json/listWithEducations.json'))).json();
  
//     importedJSON = importedJson;

//     console.log(importedJSON);

//   }//console.log(importedJSON);













// for (let i = 0; i < importedJSON.length; i++) {
//     const listedCourse = importedJSON[i];
//     console.log(i);
// }







// const addCourseToArray = (stopButtonRefreshing) => {

//     stopButtonRefreshing.preventDefault();






// for (const id in importedJSON) {
//     if (Object.hasOwnProperty.call(importedJSON, id)) {
//         const anotherCourse = importedJSON[id];
//         console.log("Count: " + id);
//     }
// }






importingJSON();
async function importingJSON() {

    const importedJson = await (await fetch(new Request('../json/listWithEducations.json'))).json();
  
    importedJSON = importedJson;

    //console.log(importedJSON);

  



for (let i = 0; i < importedJSON.length; i++) {
    const jsonToCourse = importedJSON[i];
    


    let course = {

        id: jsonToCourse.id, //Date.now(),
        kursbild: jsonToCourse.kursbild,
        kursnummer: jsonToCourse.kursnummer,
        kurstitel: jsonToCourse.kurstitel,
        kursbeskrivning: jsonToCourse.kursbeskrivning,
        kurslangd: jsonToCourse.kurslangd

    }

    coursesArray.push(course);
    console.log(`Added course to array: ${jsonToCourse.kurstitel}`);
// }
//     addItNow();

// }

// function addItNow() {

    // for (let i = 0; i < coursesArray.length; i++) {

        const newCourse = coursesArray[i];
        
        let addCourseToList = `<div id="loadInitialCourses">
        
        
        
        
        
        <a href="#">
    <div class="row container coursesCell">
        <img src="${jsonToCourse.kursbild}" class="col-4 float-start coursesImages" alt="${jsonToCourse.kurstitel}" />
        <div class="col-8 float-end coursesTextSubcell">
            <h5>${jsonToCourse.kurstitel}</h5>
            <p>${jsonToCourse.kursbeskrivning}</p>
            <br />
            <p><b><i>Kursnummer: </i></b>${jsonToCourse.kursnummer}</p>
            <p><b><i>Kurslängd: </i></b>${jsonToCourse.kurslangd}</p>
        </div>
    </div>
</a>
        
        
        
        
        
        
        </div>`

        document.getElementById("loadInitialCourses").innerHTML += addCourseToList;

    // }

    document.querySelector("form").reset();
}
}
// }

// document.addEventListener('DOMContentLoaded', () => {

//     document.getElementById("addCourseSubmitButton").addEventListener("click", addCourseToArray);

// });