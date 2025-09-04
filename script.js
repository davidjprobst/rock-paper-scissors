// SET variable computerAnswer to store the computer's answer
let computerAnswer = "";

// GET computer's answer to a random answer of rock, paper, or scissors
function getComputerAnswer() {
    // GET a random number between 0 and 99
    let randomNumber = Math.random() * 100;

    // IF the number is between greater than or equal to 0 and less than or equal to 33
    if (randomNumber >= 0 && randomNumber <= 33) {
        // SET computerAnswer to "Rock"
        computerAnswer = "Rock";
    // ELSE IF the number is greater than 33 and less than or equal to 66
    } else if (randomNumber > 33 && randomNumber <= 66) { 
        //SET computerAnswer to "Paper"
        computerAnswer = "Paper";
    // ELSE IF the number is greater than 66 and less than or equal to 99
    } else {
        //SET computerAnswer to "Scissors"
        computerAnswer = "Scissors";
    }
    // PRINT computerAnswer to console 
    return randomNumber + " " + computerAnswer;

}

console.log(getComputerAnswer());