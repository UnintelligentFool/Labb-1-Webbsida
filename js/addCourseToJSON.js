//Källa: https://www.encodedna.com/javascript/how-to-save-form-data-in-a-text-file-using-javascript.htm

let saveToJSON = () => {

    const kursnummer = document.getElementById("kursnummer");
    const kurstitel = document.getElementById("kurstitel");
    const kursbeskrivning = document.getElementById("kursbeskrivning");
    const kurslangd = document.getElementById("kurslangd");

    let newCourseValues = 'kursnummer:' + kursnummer.value + ', kurstitel:' + kurstitel.value + ', kursbeskrivning:' + kursbeskrivning.value + ', kurslangd:' + kurslangd.value;

    const typeToNewCourseValues = new Blob([newCourseValues], {type: "text/plain"});

    const saveFile = "listWithEducations.json";//../json/listWithEducations.json

    let getFileLink = document.createElement("a");
    getFileLink.download = saveFile;

    if(window.webkitURL == null) {

        getFileLink.href = window.URL.createObjectURL(typeToNewCourseValues);
        getFileLink.style.display = "none";
        document.body.appendChild(getFileLink);

    } else {

        getFileLink.href = window.webkitURL.createObjectURL(typeToNewCourseValues);

    }

    getFileLink.click();

}














// id: Date.now(),
// kursnummer: document.getElementById("kursnummer").value,
// kurstitel: document.getElementById("kurstitel").value,
// kursbeskrivning: document.getElementById("kursbeskrivning").value,
// kurslangd: document.getElementById("kurslangd").value


// <button id="addCourseSubmitButton" class="addingCourseButton" type="submit" onclick="saveToJSON()">Lägg till</button>