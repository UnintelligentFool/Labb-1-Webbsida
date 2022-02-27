let coursesArray = [];

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

    coursesArray.push(course);
    console.log(`Added course to array: ${kurstitel.value}`);
    
    for (let i = 0; i < coursesArray.length; i++) {

        const newCourse = coursesArray[i];
        
        let addCourseToList = `<li>${newCourse.id}</li>`

        document.getElementById("deathApproaches").innerHTML += addCourseToList;



    }

    document.querySelector("form").reset();

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("addCourseSubmitButton").addEventListener("click", addCourseToArray);

});