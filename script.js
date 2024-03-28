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

function game() {
    getComputerChoice();
    getPlayerChoice();
    if (playerChoice === computerChoice) {
        console.log('tie! ' + playerChoice + ' is equal to ' + computerChoice + '.');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'
    || playerChoice === 'scissors' && computerChoice === 'paper'
    || playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! ' + playerChoice + ' beats ' + computerChoice + '!');
    } else {
        console.log('You lose! ' + computerChoice + ' beats ' + playerChoice + '!');
    }
}

function playRounds() {
    for (let i = 0; i < 5; i++) {
        game();
    }
}