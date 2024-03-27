function getComputerChoice() {
    let min = 1;
    let max = 99;
    let num = Math.floor(Math.random() * (99)) + 1;
    if (num < 33) {
        console.log('rock');
    } else if (num < 66) {
        console.log('paper');
    } else {
        console.log('scissors');
    }
}