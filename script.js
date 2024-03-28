let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

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
        return ++playerScore;
    } else {
        console.log('You lose! ' + computerChoice + ' beats ' + playerChoice + '!');
        return ++computerScore;
    }
}

function playRounds() {
    for (let i = 0; i < 5; i++) {
        game();
}
console.log('The final score is player:' + playerScore + ' to computer:' + computerScore + '.')
}