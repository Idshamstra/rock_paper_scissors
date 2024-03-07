
// lets the computer pick a random item in the array
let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}
console.log(getComputerChoice(choice));


