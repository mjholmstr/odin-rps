const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function playGame() {
    for (let i = 1 ; i <= 5 ; i++) {
        playRound(i);
    }
    logWins();
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
    while (check == false) {
        input = prompt("Please type Rock, Paper, or Scissors. Check spelling!");
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}


//Validate user input
function validateInput(userInput) {
    if (choices.includes(userInput)) {
        return true;
    } else {
        return false;
    }
}


function playRound(round) {

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log(playerSelection, computerSelection);
    function checkWinner(playerSelect, computerSelect) {
        if (playerSelect.toLowerCase() === 'rock') {
            if (computerSelect === 'rock') {
                return "Tie!"
            } else if (computerSelect === 'paper') {
                return "You Lose! Paper beats Rock"
            } else {
                return "You Win! Rock beats Scissors"
            }
        } else if (playerSelect.toLowerCase() === 'paper') {
            if (computerSelect === 'rock') {
                return "You Win! Paper beats Rock"
            } else if (computerSelect === 'paper') {
                return "Tie!"
            } else {
                return "You Lose! Scissors beat Paper"
            }
        } else if (playerSelect.toLowerCase() === 'scissors') {
            if (computerSelect === 'rock') {
                return "You Lose! Rock beats Scissors"
            } else if (computerSelect === 'paper') {
                return "You Win! Scissors beat Paper"
            } else {
                return "Tie"
            }
        }
    }
    const winner = checkWinner(playerSelection, computerSelection);
  
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function logWins() {
    let playerWins = winners.filter((item) => item.startsWith("You Win")).length;
    let computerWins = winners.filter((item) => item.startsWith("You Lose")).length;
    let ties = winners.filter((item) => item.startsWith("Tie")).length;
    console.log('Results');
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round);
    console.log("Player Chose: ", playerChoice);
    console.log("Computer Chose: ", computerChoice);
    console.log(winner);
    console.log("-----------------------------------");
}






