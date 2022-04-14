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

function displayResults(result) {
    if (results.firstChild) {
        results.removeChild(results.firstChild);
    }

    const span = document.createElement("span");
    span.textContent = result;
    results.appendChild(span);
}

function printWinner(...score) {
    if (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    const span = document.createElement("span");
    if (score[0] > score[1]) {
        span.textContent = `YOU WIN THE MATCH ${score[0]} vs ${score[1]}`;
    } else {
        span.textContent = `YOU LOST! ${score[0]} vs ${score[1]}`;
    }
    results.appendChild(span);
}

// Play one round and return the winning or losing text
function playRound(playerSelection, computerSelection) {

    if (!gameOver) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {

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
        }
    }
}

let computerScore = 0;
let playerScore = 0;
let invalidInput = false;
let gameOver = false;
const btns = document.querySelectorAll("[data-selection]");
const results = document.querySelector("#result");
const playerScoreText = document.querySelector("#pscore");
const computerScoreText = document.querySelector("#cscore");

for (const btn of btns) {
    btn.addEventListener("click", e => {
        if (!gameOver) {
            displayResults(playRound(e.target.attributes[0].nodeValue, computerPlay()));
        }
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        if (playerScore >= 5 || computerScore >= 5) {
            gameOver = true;
            printWinner(playerScore, computerScore);
        }
    });
}