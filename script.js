
// lets the computer pick a random item in the array
let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choice[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice(choice));

//function that plays a single round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    
    //handles if the outcome is a tie
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!'; 
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        // Handle player win
        return 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '!'; 
    } else {
        // Handle player lose
        return 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '!'; 
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



    

    



