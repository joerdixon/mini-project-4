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

var randWord;


// FUNCTIONS ------------------------------------------

// function getWord() {
//     var randWord = wordlist[Math.floor(Math.random() * wordlist.length)]
//     randWord = randWord.split("")
//     return randWord;
// }

function startGame(event) {
    randWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    randWord = randWord.split("")
    // console.log(randWord);

    for (var i = 0; i < randWord.length; i++) {
        var underScore = document.createElement("p");
        underScore.textContent = "_";
        underScore.setAttribute("id", "box" + i);
        // console.log(underScore.getAttribute("data-index"));
        underScore.setAttribute("style", "font-size: 2rem; display: inline; margin: 10px; text-align: center;")
        wordDisplay.appendChild(underScore)
    }
}

function playerGuess(event) {
//     var keyPressed = event.key.toLowerCase();
//     var alphaNumeric = "abcdefghigklmnopqrstuvwxyz1234567890 ".split("");
    // Check to see if alphaNumeric includes keyPressed.
    console.log(randWord);

    for (var i = 0; i < randWord.length; i++) {
        if (event.key == randWord[i]) {
            var index = wordDisplay.getAttribute("data-index");
            wordDisplay.innerHTML = event.key;
        }
    }

    // console.log(event);
} 

// EVENT LISTENERS ------------------------------------

startButton.addEventListener("click", startGame)

document.addEventListener("keyup", playerGuess)
















/* 
When the page is loaded, check to see if the user has a record.

if so, render to the page in the wins and losses categories.

When the player hits the start button.

Start the timer,
Randomly select a string from wordlist.
split the string into its own array.

var controlArray = create variable of filled in array. - set to the side for comparison -

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
