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

function playRound() {
    getComputerChoice();
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

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Win!';
        } else if (playerScore === computerScore) {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. It\'s a tie!';
        } else {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Lose!';
        }
        const rockBtn = document.getElementById("rock");
        rockBtn.remove();
        const paperBtn = document.getElementById("paper");
        paperBtn.remove();
        const scissorsBtn = document.getElementById("scissors");
        scissorsBtn.remove();
    };
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

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Win!';
        } else if (playerScore === computerScore) {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. It\'s a tie!';
        } else {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Lose!';
        }
        const rockBtn = document.getElementById("rock");
        rockBtn.remove();
        const paperBtn = document.getElementById("paper");
        paperBtn.remove();
        const scissorsBtn = document.getElementById("scissors");
        scissorsBtn.remove();
    };
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

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Win!';
        } else if (playerScore === computerScore) {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. It\'s a tie!';
        } else {
            announcerText.textContent = 'The final score is player: ' + playerScore + ' to computer: ' + computerScore + '. You Lose!';
        }
        const rockBtn = document.getElementById("rock");
        rockBtn.remove();
        const paperBtn = document.getElementById("paper");
        paperBtn.remove();
        const scissorsBtn = document.getElementById("scissors");
        scissorsBtn.remove();
    };
});



