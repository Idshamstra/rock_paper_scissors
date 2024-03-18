// lets the computer pick a random item in the array
let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choice[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice(choice));

//plays single round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase 
    playerSelection = playerSelection.toLowerCase();
    
    //handles if the outcome is a tie
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!'; 
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
       
        return 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '!'; 
    } else {
        
        return 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '!'; 
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//score tracker
function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice of weapon! Rock, Paper or Scissors!");
        const computerSelection = getComputerChoice();
        console.log('Round ' + (i + 1) + ':');
        console.log('Player chooses: ' + playerSelection);
        console.log('Computer chooses: ' + computerSelection);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    console.log('\nGame over!');
    console.log('Player score: ' + playerScore);
    console.log('Computer score: ' + computerScore);

    if (playerScore > computerScore) {
        console.log("You beat the computer! You win");
    } else if ( playerScore < computerScore){
        console.log("You lose! Computer wins");
    } else {
        console.log("It's a tie!")
    }
        
       
}

playGame();




    



