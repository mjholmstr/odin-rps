let myArray = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let compChoice = myArray[Math.floor(Math.random() * myArray.length)];
}