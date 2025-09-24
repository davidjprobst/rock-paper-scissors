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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
    const humanScoreCounter = document.querySelector("#human-score-counter");
        humanScoreCounter.textContent += ` ${humanScore}`;

    const cpuScoreCounter = document.querySelector("#cpu-score-counter");
        cpuScoreCounter.textContent += ` ${computerScore}`;

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

        const results = document.querySelector("#results");

        const humanRoundChoice = document.createElement("div");
        humanRoundChoice.classList.add("human-round-choice");
        humanRoundChoice.textContent = `You chose ${humanChoice}`;

        const cpuRoundChoice = document.createElement("div");
        cpuRoundChoice.classList.add("cpu-round-choice");
        cpuRoundChoice.textContent = `The computer chose ${computerChoice}`;

        const roundResult = document.createElement("div");
        roundResult.classList.add("round-result");
        roundResult.textContent = `${result}`;

        const gameEnd = document.createElement("div")
        gameEnd.classList.add("round-result");
        
        results.appendChild(humanRoundChoice);
        results.appendChild(cpuRoundChoice);
        results.appendChild(roundResult);

        if (humanScore === 5) {
            gameEnd.textContent = "Game over! You win :D";
            results.appendChild(gameEnd);
        } else if (computerScore === 5) {
            gameEnd.textContent = "Game over! You lose :-(";
            results.appendChild(gameEnd);
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanSelection = button.id;
            playRound();
        });
    });

}

playGame();