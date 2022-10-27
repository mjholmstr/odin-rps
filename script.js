let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'Rock') {
            return "Tie!"
        } else if (computerSelection === 'Paper') {
            return "You lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'Rock') {
            return "You Win! Paper beats Rock"
        } else if (computerSelection === 'Paper') {
            return "Tie!"
        } else {
            return "You Lose! Scissors beat Paper"
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'Rock') {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection === 'Paper') {
            return "You Win! Scissors beat Paper"
        } else {
            return "Tie"
        }
    }
}

let playerSelection = "Paper";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




