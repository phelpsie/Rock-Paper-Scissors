let playerChoice;
let computerChoice;

function getComputerChoice() {
    let min = 1;
    let max = 99;
    let num = Math.floor(Math.random() * (99)) + 1;
    if (num < 33) {
        return computerChoice ='rock';
    } else if (num < 66) {
        return computerChoice ='paper';
    } else {
        return computerChoice ='scissors';
    }
}

function getPlayerChoice() {
    playerChoice = prompt('rock, paper, or scissors?','');
    playerChoice.toLowerCase();
    return playerChoice;
}
