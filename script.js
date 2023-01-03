const choices = ['rock', 'paper', 'scissors'];

function game() {
    playRound();
}

function getComputerChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function getPlayerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if (check == true) {
        console.log(input);
    }
}

getPlayerChoice();

//Validate user input
function validateInput(userInput) {
    if (choices.includes(userInput)) {
        return true;
    } else {
        return false;
    }
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return "Tie!"
        } else if (computerSelection === 'paper') {
            return "You lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return "You Win! Paper beats Rock"
        } else if (computerSelection === 'paper') {
            return "Tie!"
        } else {
            return "You Lose! Scissors beat Paper"
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection === 'paper') {
            return "You Win! Scissors beat Paper"
        } else {
            return "Tie"
        }
    }
}

let playerSelection = "Paper";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




