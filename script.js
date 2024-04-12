let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let roundResult;

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

//function getPlayerChoice() {
//    playerChoice = prompt('rock, paper, or scissors?','');
//   playerChoice.toLowerCase();
//    return playerChoice;
//}

function playRound() {
    getComputerChoice();
    //getPlayerChoice();
    if (playerChoice === computerChoice) {
        roundResult = 'Tie! ' + playerChoice + ' is equal to ' + computerChoice + '.';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'
    || playerChoice === 'scissors' && computerChoice === 'paper'
    || playerChoice === 'paper' && computerChoice === 'rock') {
        roundResult = 'You win! ' + playerChoice + ' beats ' + computerChoice + '!';
        return ++playerScore;
    } else {
        roundResult = 'You lose! ' + computerChoice + ' beats ' + playerChoice + '!';
        return ++computerScore;
    }
}

function playGame() {
    //for (let i = 0; i < 5; i++) {
        playRound();
//}

if (playerScore > computerScore) {
    console.log('The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Win!');
} else if (playerScore === computerScore) {
    console.log('The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. It\'s a tie!');
} else {
    console.log('The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Lose!');
}
}

// playGame();

//Added Buttons:

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function playerChoiceRock() {
    playerChoice = 'rock';
    playRound();
    let announcerDiv = document.querySelector('.announcerDiv');
    let announcerText = document.querySelector('.announcerText');
    announcerText.textContent = roundResult;
    announcerDiv.appendChild(announcerText);

    let scoreboard = document.querySelector('.scoreboard');
    let score = document.querySelector('.score');
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    scoreboard.appendChild(score);
});

paper.addEventListener('click', function playerChoicePaper() {
    playerChoice = 'paper';
    playRound();
    let announcerDiv = document.querySelector('.announcerDiv');
    let announcerText = document.querySelector('.announcerText');
    announcerText.textContent = roundResult;
    announcerDiv.appendChild(announcerText);

    let scoreboard = document.querySelector('.scoreboard');
    let score = document.querySelector('.score');
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    scoreboard.appendChild(score);
});

scissors.addEventListener('click', function playerChoiceScissors() {
    playerChoice = 'scissors';
    playRound();
    let announcerDiv = document.querySelector('.announcerDiv');
    let announcerText = document.querySelector('.announcerText');
    announcerText.textContent = roundResult;
    announcerDiv.appendChild(announcerText);

    let scoreboard = document.querySelector('.scoreboard');
    let score = document.querySelector('.score');
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    scoreboard.appendChild(score);
});



