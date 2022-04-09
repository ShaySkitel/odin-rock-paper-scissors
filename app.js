// Return rock, paper or scissors string randomly
function computerPlay() {
    switch (random(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Generate a random number up to but not including the given argument number
function random(num) {
    return Math.floor(Math.random() * num);
}

// Play one round and return the winning or losing text
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        console.log(playerSelection, computerSelection)
        if (playerSelection === "rock" && computerSelection === "rock") {
            return `Draw! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            return `You Win! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return `You Lose! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "paper" && computerSelection === "paper") {
            return `Draw! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            return `You Win! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return `You Lose! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return `Draw! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            return `You Win! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return `You Lose! ${playerSelection} vs ${computerSelection}`;
        }
    } else {
        console.error("Invald Input. (rock, paper or scissors only)");
        return false;
        invalidInput = true;
    }
}

// Main game loop
function game() {

    let numberOfRounds = 5;

    // Play the game for 5 rounds
    for (let i = 0; i < numberOfRounds; i++) {
        invalidInput = false;
        const playerSelection = prompt("rock, paper or scissors?");

        // If the player gave an invalid input, increase number of rounds by 1
        // So that it will always be 5 (valid) rounds
        const result = playRound(playerSelection, computerPlay());
        if (result === false) {
            numberOfRounds++;
        } else {
            console.log(result);
        }
    }

    // Print match winner / loser or print draw if its a draw
    if (playerScore > computerScore) {
        console.log(`You won the match! your score: ${playerScore} vs ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lost the match! your score: ${playerScore} vs ${computerScore}`);
    } else {
        console.log(`Its a draw! your score: ${playerScore} vs ${computerScore}`);
    }
}

let computerScore = 0;
let playerScore = 0;
let invalidInput = false;

game();