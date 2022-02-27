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
        
        deathApproaches












        const police = policemen[i];
    
    let innerHTML = `<li>${police.firstName} ${police.lastName}</li>`

    document.getElementById("ulListOfPersons").innerHTML += innerHTML;











    

    }

    document.querySelector("form").reset();

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("addCourseSubmitButton").addEventListener("click", addCourseToArray);

});