let computerAnswer = "";
// INIT humanChoice with a blank string
let humanChoice = "";

function getComputerAnswer() {
    let randomNumber = Math.random() * 100;

    if (randomNumber >= 0 && randomNumber <= 33) {
        computerAnswer = "Rock";
    } else if (randomNumber > 33 && randomNumber <= 66) { 
        computerAnswer = "Paper";
    } else {
        computerAnswer = "Scissors";
    }

    return randomNumber + " " + computerAnswer;
}

// INIT getHumanChoice function
function getHumanChoice() {
    // PROMPT user to choooise "Rock", "Paper", or "Scissors"
    humanChoice = prompt("Rock, paper, or scissors?", "");
    // RETURN "you chose [humanChoice]" to console
    return "you chose " + humanChoice
}

console.log(getComputerAnswer());
console.log(getHumanChoice());