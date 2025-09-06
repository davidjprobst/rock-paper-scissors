let humanScore = 0;
let computerScore = 0;
// let computerChoice = "";
// let humanChoice = "";

function getComputerChoice() {
    let randomNumber = Math.random() * 100;

    if (randomNumber >= 0 && randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber > 33 && randomNumber <= 66) { 
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}


function getHumanChoice() {
    humanChoice = prompt("Rock, paper, or scissors?", "");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanSelection.toLowerCase();
    console.log("human choice: " + humanChoice)
    computerChoice = computerSelection;
    console.log("computer choice: " + computerChoice);

    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! You covered the computer's rock!");
        // ADD 1 to human score
    
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! You smashed the computer's scissors!");
        // ADD 1 to human score

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! You smashed the computer's scissors!");
        // ADD 1 to human score
    
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Your paper was cut by scissors!");
        // ADD 1 to computer score
    
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Your scissors were smashed by a rock!");
        // ADD 1 to computer score
    
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Your rock was covered by paper!");
        // ADD 1 to computer score

    } else if (humanChoice === computerChoice) {
        // LOG "Draw! Try again..."
        console.log("Draw! Try again...");
    
    } else {
        console.log("Something went wrong. You must choose rock, paper, or scissors.")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound();