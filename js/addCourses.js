//let coursesArray = [];

const addCourseToArray = (stopButtonRefreshing) => {

    stopButtonRefreshing.preventDefault();//////////////

    let course = {

        id: Date.now(),
        kursbild: document.getElementById("kursbild").value,
        kursnummer: document.getElementById("kursnummer").value,
        kurstitel: document.getElementById("kurstitel").value,
        kursbeskrivning: document.getElementById("kursbeskrivning").value,
        kurslangd: document.getElementById("kurslangd").value

    }

    //coursesArray.push(course);
    //console.log(`Added course to array: ${kurstitel.value}`);
    
    //for (let i = 0; i < coursesArray.length; i++) {

        //const newCourse = coursesArray[i];
        
        //let addCourseToList = `<li class="addedCoursesHideDecorations">
        let addCourseToList = `<div>
        
        
        
        
        
        <a href="#">
    <div class="row container coursesCell">
        <img src="${kursbild.value}" class="col-4 float-start coursesImages" alt="${kurstitel.value}" />
        <div class="col-8 float-end coursesTextSubcell">
            <h5>${kurstitel.value}</h5>
            <p>${kursbeskrivning.value}</p>
            <br />
            <p><b><i>Kursnummer: </i></b>${kursnummer.value}</p>
            <p><b><i>Kurslängd: </i></b>${kurslangd.value}</p>
        </div>
    </div>
</a>
        
        
        
        
        
        
        </div>`//</li>`

        //document.getElementById("deathApproaches").innerHTML += addCourseToList;
        document.getElementById("soonTimeIsUp").innerHTML += addCourseToList;

    //}

    document.querySelector("form").reset();

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("addCourseSubmitButton").addEventListener("click", addCourseToArray);

});