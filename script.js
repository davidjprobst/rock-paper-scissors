let computerAnswer = 0;
let humanChoice = 0;

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


function getHumanChoice() {
    humanChoice = prompt("Rock, paper, or scissors?", "");
    return "You chose " + humanChoice;
}

console.log(getHumanChoice());
console.log(getComputerAnswer());