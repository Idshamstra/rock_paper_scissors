
// lets the computer pick a random item in the array
let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice(choice));

//function that plays a single round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper")
        return ("You Lose! Paper beats Rock!")

    



}