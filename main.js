//Loads database data
const personalityData = loadDatabase("Personality");

//Gains access to the different sections of the page
let general = document.getElementById("general")
let people = document.getElementById("people")
let comm = document.getElementById("comm")




/**********************
General Profile Section
**********************/

//Creates the div and header for the general section
let generalDiv = document.createElement('div');
let generalHeader = document.createElement("h2")

generalDiv.appendChild(generalHeader)
generalHeader.innerHTML = `General Profile Section`

for (key in personalityData.general) {
    for (category in personalityData.general[key]) {
        let statement = personalityData.general[key][category].statement;
        let why = personalityData.general[key][category].why

        if (!personalityData.general[key][category].why) {
            generalDiv.innerHTML += `<p class="flex-item">I agree with the statement "${statement}"</p>`;
            general.appendChild(generalDiv)
        } else {
            generalDiv.innerHTML += `<p class="flex-item">I don't agree with the statement" ${statement}" because ${why}</p>`;
            general.appendChild(generalDiv)
        }
    }
}


/**********************
People Like Me Section
**********************/
let peopleDiv = document.createElement('div');
let peopleHeader = document.createElement("h2")

peopleHeader.innerHTML = `People Like Me`
peopleDiv.appendChild(peopleHeader)

for (key in personalityData.people) {
    //let section = document.createElement("section");
    let person = personalityData.people[key].name;

    peopleDiv.innerHTML += `<p class="flex-item">${person}</p>`;
    people.appendChild(peopleDiv)
}


/**********************
Communication Section
**********************/
let commDiv = document.createElement('div');
let commHeader = document.createElement("h2");

commHeader.innerHTML = `Communication Section`;
commDiv.appendChild(commHeader);

for (key in personalityData.communication) {
    //let section = document.createElement("section");
    let type = personalityData.communication[key].comm;

    commDiv.innerHTML += `<p class="flex-item">${type}</p>`;
    comm.appendChild(commDiv)
}


