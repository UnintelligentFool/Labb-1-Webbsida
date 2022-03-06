const addCourseToArray = (stopButtonRefreshing) => {

    stopButtonRefreshing.preventDefault();

    let course = {

        id: Date.now(),
        kursbild: document.getElementById("kursbild").value,
        kursnummer: document.getElementById("kursnummer").value,
        kurstitel: document.getElementById("kurstitel").value,
        kursbeskrivning: document.getElementById("kursbeskrivning").value,
        kurslangd: document.getElementById("kurslangd").value

    }

        let addCourseToList = `
        
            <div>
                <a href="#" id="${kurstitel.value}" onClick="addToCart([this.id, ${pris.value}])">
                    <div class="row container coursesCell">
                        <img src="${kursbild.value}" class="col-4 float-start coursesImages" alt="${kurstitel.value}" />
                        <div class="col-8 float-end coursesTextSubcell">
                            <h5>${kurstitel.value}</h5>
                            <p>${kursbeskrivning.value}</p>
                            <br />
                            <p><b><i>Kursnummer: </i></b>${kursnummer.value}</p>
                            <p><b><i>Kurslängd: </i></b>${kurslangd.value}</p>
                            <p><b><i>Pris: </i></b>${pris.value} SEK</p>
                        </div>
                    </div>
                </a>
            </div>
        `
        
        document.getElementById("soonTimeIsUp").innerHTML += addCourseToList;

    document.querySelector("form").reset();

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("addCourseSubmitButton").addEventListener("click", addCourseToArray);

});