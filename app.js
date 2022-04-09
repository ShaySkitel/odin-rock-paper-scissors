// Return rock, paper or scissors string randomly
function computerPlay() {
    switch (random(3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// Generate a random number up to but not including the given argument number
function random(num) {
    return Math.floor(Math.random() * num);
}