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
};

let humanScore = 0;
let computerScore = 0;

const humanScoreCounter = document.querySelector("#human-score-counter");
    humanScoreCounter.textContent = `Human score: ${humanScore}`;

const cpuScoreCounter = document.querySelector("#cpu-score-counter");
    cpuScoreCounter.textContent = `Computer score: ${computerScore}`;

const results = document.querySelector("#results");
    const humanRoundChoice = document.createElement("p");
    const cpuRoundChoice = document.createElement("p");
    const roundResult = document.createElement("p");

const buttons = document.querySelectorAll("button");

const gameEnd = document.querySelector("#game-end");
    const newGame = document.createElement("div");
    const gameResult = document.createElement("p");
    const newGameBtn = document.createElement("button");
        newGameBtn.textContent = "Start a new game";


function playGame() {

    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanSelection.toLowerCase();
        computerChoice = getComputerChoice();
        let result = ""

        if (humanChoice === "paper" && computerChoice === "rock") {
            result = "You win! You covered the computer's rock!";
            humanScore++;
            humanScoreCounter.textContent = `Human score: ${humanScore}`;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            result = "You win! You smashed the computer's scissors!";
            humanScore++;
            humanScoreCounter.textContent = `Human score: ${humanScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            result = "You win! You smashed the computer's scissors!";
            humanScore++;
            humanScoreCounter.textContent = `Human score: ${humanScore}`;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            result = "You lose! Your paper was cut by scissors!";
            computerScore++;
            cpuScoreCounter.textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            result = "You lose! Your scissors were smashed by a rock!";
            computerScore++;
            cpuScoreCounter.textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            result = "You lose! Your rock was covered by paper!";
            computerScore++;
            cpuScoreCounter.textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === computerChoice) {
            result = "Draw! Try again...";
        } else {
            result = "Something went wrong. You must choose rock, paper, or scissors.";
        }

        humanRoundChoice.classList.add("human-round-choice");
        humanRoundChoice.textContent = `You chose ${humanChoice}`;
        
        cpuRoundChoice.classList.add("cpu-round-choice");
        cpuRoundChoice.textContent = `The computer chose ${computerChoice}`;
        
        roundResult.classList.add("round-result");
        roundResult.textContent = `${result}`;
        
        results.appendChild(humanRoundChoice);
        results.appendChild(cpuRoundChoice);
        results.appendChild(roundResult);

        if (computerScore === 5) {
            gameResult.stlye.color = "green";
            gameResult.textContent = "Game over! You win :D";
            newGame.appendChild(gameResult);
            newGame.appendChild(newGameBtn);
            gameEnd.appendChild(newGame);
        } else if (humanScore === 5) {
            gameResult.style.color = "red";
            gameResult.textContent = "Game over! You lose :-(";
            newGame.appendChild(gameResult);
            newGame.appendChild(newGameBtn);
            gameEnd.appendChild(newGame);
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanSelection = button.id;
            playRound();
        });
    });

    newGameBtn.addEventListener("click", () => {
        results.removeChild(humanRoundChoice);
        results.removeChild(cpuRoundChoice);
        results.removeChild(roundResult);
        gameEnd.removeChild(newGame);
        playGame();
    });

}

playGame();