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

// INIT playRound function with two parameters (humanChoice and computerChoice);
function playRound(humanChoice, computerChoice) {
    // Make humanChoice to be case insensitive
    humanChoice = humanSelection.toLowerCase();
    console.log("human choice: " + humanChoice)
    computerChoice = computerSelection;
    console.log("computer choice: " + computerChoice);

;   // PRINT results of game to console ex: "You lose! Paper beats rock!"

        // IF human chooses paper and computer chooses rock
        if (humanChoice === "paper" && computerChoice === "rock") {
            // LOG "You win! You covered the computer's rock!"
            console.log("You win! You covered the computer's rock!");
            // ADD 1 to human score
        
        // ELSE IF human chooses rock and computer chooses scissors
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            // LOG "You win! You smashed the computer's scissors!"
            console.log("You win! You smashed the computer's scissors!");
            // ADD 1 to human score

        // ELSE IF human chooses scissors and computer chooses paper
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            // LOG "You win! You cut the computer's paper!"
            console.log("You win! You smashed the computer's scissors!");
            // ADD 1 to human score
        
        // ELSE IF human chooses paper and computer chooses scissors
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            // LOG "You lose! Your paper was cut by scissors!"
            console.log("You lose! Your paper was cut by scissors!");
            // ADD 1 to computer score
        
         // ELSE IF human chooses scissors and computer chooses rock
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            // LOG "You lose! Your scissors were smashed by a rock!"
            console.log("You lose! Your scissors were smashed by a rock!");
            // ADD 1 to computer score
        
        // ELSE IF human chooses rock and computer chooses paper
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            // LOG "You lose! Your rock was covered by paper!"
            console.log("You lose! Your rock was covered by paper!");
            // ADD 1 to computer score

        // ELSE IF human choice matches computer choice
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