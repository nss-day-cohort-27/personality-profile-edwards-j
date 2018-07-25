personality = {};

personality.general = {};
personality.people = [];
personality.communication = [];

personality.general.agree = [];
personality.general.disagree = [];

const agree1 = {
    statement: "Everything is better with coffee"
}
const agree2 = {
    statement: "NSS Rocks!"
}
const agree3 = {
    statement: "I have no idea what I'm doing"
}

const disagree1 = {
    statement: "Coding is hard",
    why: "look at what I did!"
}
const disagree2 = {
    statement: "Bootstrap sucks",
    why: "that responsive grid is awesome"
}
const disagree3 = {
    statement: "MacBooks are dumb",
    why: "MacBooks is the best"
}

const person1 = {
    name: "Sean Connery"
}
const person2 = {
    name: "Barack Obama"
}
const person3 = {
    name: "Daenerys Targaryen"
}

const sibComm = {
    comm: "Asking lots of easy questions so I can appear to know what I'm doing."
}
const insComm = {
    comm: "Giving clear, thorough explainations of new topics and pushing us to learn something new everyday."
}
const teamComm = {
    comm: "Giving constructive feedback and helping everyone learn"
}


personality.general.agree.push(agree1, agree2, agree3)
personality.general.disagree.push(disagree1, disagree2, disagree3)
personality.people.push(person1,person2,person3)
personality.communication.push(sibComm, insComm, teamComm)



const saveDatabase = function (databaseObject, localStorageKey) {
    //Convert the Object into a string.
    const stringifiedDatabase = JSON.stringify(databaseObject)
    //Create a key in local storage, and store the string
    //version of your inventory database as the value
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// Persist the database to localStorage
saveDatabase(personality, "Personality");

