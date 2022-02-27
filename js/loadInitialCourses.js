let coursesArray = [];

let importedJSON = "";


importingJSON();
async function importingJSON() {

    //Källa: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
    const importedJson = await (await fetch(new Request('../json/listWithEducations.json'))).json();
  
    importedJSON = importedJson;

for (let i = 0; i < importedJSON.length; i++) {
    const jsonToCourse = importedJSON[i];

    let course = {

        id: jsonToCourse.id,
        kursbild: jsonToCourse.kursbild,
        kursnummer: jsonToCourse.kursnummer,
        kurstitel: jsonToCourse.kurstitel,
        kursbeskrivning: jsonToCourse.kursbeskrivning,
        kurslangd: jsonToCourse.kurslangd

    }

    coursesArray.push(course);
    console.log(`Added course to array: ${jsonToCourse.kurstitel}`);

    let addCourseToList = `
        
        <div id="loadInitialCourses">
            <a href="#" id="${jsonToCourse.kurstitel}, " onClick="addToCart(this.id)">
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
        </div>

    `

    document.getElementById("loadInitialCourses").innerHTML += addCourseToList;

    document.querySelector("form").reset();
}
}