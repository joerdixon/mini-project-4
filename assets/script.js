var wordlist = ["javascript", "stylesheet", "hypertext", "markup", "stringify"];
// Start Game
var startButton = document.getElementById("start");
// Seconds Remaining
var secondsRemain = document.querySelector(".seconds");
// Stats
var statsReset = document.getElementById("reset-button");
var winCount = document.getElementById("wincount");
var lossCount = document.getElementById("losscount");
// Wordspace
var wordDisplay = document.getElementById("actualword");

// Control Array
var randWord;
// Seen By Player Array
var sbpArray;

// Initialize Stats
if (localStorage.getItem("wins") !== null) {
    var wins = localStorage.getItem("wins")
    renderCurrentWord();
} else {
    wins = 0;
}

if (localStorage.getItem("losses") !== null) {
    var losses = localStorage.getItem("losses")
    renderCurrentWord();
} else {
    wins = 0;
}

// FUNCTIONS ------------------------------------------

function startGame(event) {
    // GENERATE A RANDOM WORD FROM THE LIST AND SPLIT INTO AN ARRAY
    randWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    randWord = randWord.split("")
    // RESET PLAYER ARRAY TO BE EMPTY
    sbpArray = [];
    // FOR THE LENGTH OF THE CONTROL ARRAY
    for (var i = 0; i < randWord.length; i++) {
        // ADD UNDERSCORES
        sbpArray.push("_");
            // PRINT TO SCREEN
        renderCurrentWord();
    }

}



// WHEN THE PLAYER PRESSES A KEY
function playerGuess(event) {
    // FOR THE LENGTH OF THE CONTROL ARRAY
    for (var i = 0; i < randWord.length; i++) {
        // IF THE GUESS AND A LETTER MATCH
        if (event.key == randWord[i]) {
            // CHANGE THE UNDERSCORE TO THE REVEALED LETTER
            sbpArray[i] = randWord[i];
            // UPDATE DISPLAY
            renderCurrentWord();
        }
    }
            // WIN CONDITION
            if (!sbpArray.includes("_")) {
                win();
            }
} 

// WHEN WE NEED TO UPDATE/INITIALIZE THE SCREEN
function renderCurrentWord() {
    winCount.textContent = "Wins: " + wins;
    lossCount.textContent = "Losses: " + losses;
    // ERASE EVERYTHING ALREADY THERE
    wordDisplay.innerHTML = "";
    if (randWord !== undefined) {
            // FOR THE LENGTH OF THE CONTROL ARRAY
            for (var i = 0; i < randWord.length; i++) {
        // CREATE A P TAG
        var underScore = document.createElement("p");
        // SET TEXT CONTENT TO THE CORRECT STATE
        underScore.textContent = sbpArray[i];
        // STYLE AND APPEND
        underScore.setAttribute("style", "font-size: 2rem; display: inline; margin: 10px; text-align: center;")
        wordDisplay.appendChild(underScore)
    }
    }
}

// WHEN THE PLAYER WINS
function win() {
    wordDisplay.innerHTML = "YOU WIN!!!"
    wins++;
    storeStats();
    renderCurrentWord();
    sbpArray = ["_"]
}

function loss() {
    wordDisplay.innerHTML = "YOU LOSE!!!"
} 


function storeStats() {
    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", losses);
}

function resetStats() {
    localStorage.setItem("wins", 0);
    localStorage.setItem("losses", 0);
    wins = 0;
    losses = 0;
    renderCurrentWord();
}


// EVENT LISTENERS ------------------------------------


// WHEN A USER HITS START
startButton.addEventListener("click", startGame)


// WHEN A USER HITS A KEYSTROKE
document.addEventListener("keyup", playerGuess)

// WHEN A USER HITS RESET STATS BUTTON
statsReset.addEventListener("click", resetStats)


/* 
When the page is loaded, check to see if the user has a record. TODO:

if so, render to the page in the wins and losses categories. TODO:

When the player hits the start button. 

Start the timer, TODO:
Randomly select a string from wordlist.
split the string into its own array.

var randWord = create variable of filled in array. - set to the side for comparison -

For (each item in the array we made from wordlist)

create a p tag within the word-display
set the p tag to be an empty underscore
append the p tag to the page.

EVENT LISTENER - Keystroke

if (keystoke is within the controlArray)

    note the position of that letter (or multiple letters)

    replace the textcontent of the underscore array with those letters in those indexs.

    data-hidden: trues.

    date-

    if (every character in the array is data-hidden: false)
       win screen
       wins++
*/


// TODO: ADD TIMER AND LOSS CONDITION

// TODO: WHILE (gameEnd) {infinite loop until game start. keeps things from updating.}