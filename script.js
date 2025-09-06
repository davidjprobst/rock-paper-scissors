// INIT playRound function with two parameters (humanChoice and computerChoice);
    // Make humanChoice to be case insensitive
    // PRINT results of game to console ex: "You lose! Paper beats rock!"
    // ADD one point to the score of the winner
        // IF human wins, ADD humanScore +1
        // ELSE ADD computerScore +1

let humanScore = 0;
let computerScore = 0;
let computerAnswer = "";
let humanAnswer = "";

function getComputerAnswer() {
    let randomNumber = Math.random() * 100;

    if (randomNumber >= 0 && randomNumber <= 33) {
        computerAnswer = "Rock";
    } else if (randomNumber > 33 && randomNumber <= 66) { 
        computerAnswer = "Paper";
    } else {
        computerAnswer = "Scissors";
    }

    return "Computer chose " + computerAnswer;
}


function getHumanAnswer() {
    humanAnswer = prompt("Rock, paper, or scissors?", "");
    return "You chose " + humanAnswer;
}

console.log(getHumanAnswer());
console.log(getComputerAnswer());