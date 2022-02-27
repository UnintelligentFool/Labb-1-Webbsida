//Källa: https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/

function sendJSON(){
              
    // let id = Date.now();
    // let kursnummer = document.getElementById("kursnummer").value;
    // let kurstitel = document.getElementById("kurstitel").value;
    // let kursbeskrivning = document.getElementById("kursbeskrivning").value;
    // let kurslangd = document.getElementById("kurslangd").value;

    let course = {

        id: Date.now(),
        kursnummer: document.getElementById("kursnummer").value,
        kurstitel: document.getElementById("kurstitel").value,
        kursbeskrivning: document.getElementById("kursbeskrivning").value,
        kurslangd: document.getElementById("kurslangd").value

    }
      
    let xhr = new XMLHttpRequest();
    let url = "dysfunctionalJSON.json";

    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "text/plain");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            alert("Finished!");

        }
    };

    var data = JSON.stringify(course);

    xhr.send(data);
}