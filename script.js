let computerAnswer = "";

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

// INIT getHumanChoice with a blank string
// PROMPT user to choooise "Rock", "Paper", or "Scissors"
// GET user choice
// PRINT user choice to console

console.log(getComputerAnswer());