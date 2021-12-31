//Rock-Paper-Scissors
const buttons = document.querySelectorAll('.button')
const cpuDisplay = document.querySelector('#cpu-div')
const playerScore = document.querySelector('#playerScore')
const cpuScore = document.querySelector('#cpuScore')
const rounds = document.querySelector('.round')
const rockPaperScissors = ['rock', 'paper', 'scissors'];

let round = 1;
let random = '';
let player1 = 0;
let cpu = 0;

function computerPlay() {
    random = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

playerScore.innerHTML = player1
cpuScore.innerHTML = cpu

function rockClicked() {
    computerPlay()
    playerSelection = 'rock';
    cpuDisplay.innerHTML = random;
    game()
    showAlert()
    console.log(random)
}
        
function paperClicked() {
    computerPlay()
    playerSelection = 'paper';
    cpuDisplay.innerHTML = random;
    game()
    showAlert()
    console.log(random)
}
        
function scissorsClicked() {
    computerPlay()
    playerSelection = 'scissors';
    cpuDisplay.innerHTML = random;
    game()
    showAlert()
    console.log(random)
}



function showAlert() {
    if (player1 >= 5 && player1 > cpu) {
        rounds.innerHTML = 'YOU WON!';
        round = 1
        player1 = 0
        cpu = 0
    } else if (cpu >= 5 && cpu > player1) {
        rounds.innerHTML = 'YOU LOSE';
        round = 1
        player1 = 0
        cpu = 0
    } else {
        return null;
    }
}

function game() {
    if (playerSelection === 'rock' && random === 'paper') {
        round ++;
        cpu += 1
        console.log(cpu)
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
    } else if (playerSelection === 'rock' && random === 'scissors') {
        round ++;
        player1 += 1
        console.log(player1)
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
    } else if (playerSelection === 'rock' && random === 'rock') {
        round ++;
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
        return 'tied'
    } else if (playerSelection === 'paper' && random === 'scissors') {
        round ++;
        cpu += 1
        console.log(cpu)
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
    } else if (playerSelection === 'paper' && random === 'rock') {
        round ++;
        player1 += 1
        console.log(player1)

        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
    } else if (playerSelection === 'paper' && random === 'paper') {
        round ++;
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
        return 'tied'
    } else if (playerSelection === 'scissors' && random === 'rock') {
        round ++;
        cpu += 1
        console.log(cpu)
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
    } else if (playerSelection === 'scissors' && random === 'paper') {
        round ++;
        player1 += 1
        console.log(player1)
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
    } else if (playerSelection === 'scissors' && random === 'scissors') {
        round ++;
        playerScore.innerHTML = player1
        cpuScore.innerHTML = cpu
        rounds.innerHTML = round
        return 'Tied'
    } else {
        return 'Error'
    }  
}
