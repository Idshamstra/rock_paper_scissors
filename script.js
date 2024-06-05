


let choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;
        return 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '!';
    } else {
        computerScore++;
        return 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '!';
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore === 5) {
        document.getElementById('winner').textContent = "AYY YOU WIN! LET'S GO!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('winner').textContent = "WOMP WOMP, YOU LOSE!";
        disableButtons();
    }
}

function handleButtonClick(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    
    document.getElementById('result').textContent = `Player chooses: ${playerSelection}. Computer chooses: ${computerSelection}. ${result}`;
    updateScore();
    checkWinner();
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => handleButtonClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleButtonClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleButtonClick('scissors'));

