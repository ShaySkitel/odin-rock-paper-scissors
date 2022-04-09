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

        if (playerSelection === "rock" && computerSelection === "rock") {
            return `Draw! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            return `You Win! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            return `You Lose! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "paper" && computerSelection === "paper") {
            return `Draw! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            return `You Win! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            return `You Lose! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return `Draw! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            return `You Win! ${playerSelection} vs ${computerSelection}`;
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            return `You Lose! ${playerSelection} vs ${computerSelection}`;
        }
    } else {
        console.error("Invald Input. (rock, paper or scissors only)");
        return false;
    }
}