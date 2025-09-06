let roundsPlayed = 0;

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

function playGame() {

    let humanScore = 0;
    console.log(humanScore);
    let computerScore = 0;
    console.log(computerScore);

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanSelection.toLowerCase();
        console.log("human choice: " + humanChoice)
        computerChoice = computerSelection;
        console.log("computer choice: " + computerChoice);

        if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! You covered the computer's rock!");
            humanScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! You smashed the computer's scissors!");
            humanScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! You smashed the computer's scissors!");
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Your paper was cut by scissors!");
            computerScore++
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Your scissors were smashed by a rock!");
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Your rock was covered by paper!");
            computerScore++
        } else if (humanChoice === computerChoice) {
            console.log("Draw! Try again...");
        } else {
            console.log("Something went wrong. You must choose rock, paper, or scissors.")
        }

        roundsPlayed++
        console.log(roundsPlayed);

    }

    playRound();

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound();

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound();

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound();

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound();

    console.log("Game over");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playGame();