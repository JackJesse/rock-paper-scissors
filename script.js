//Rock-Paper-Scissors

let rockPaperScissors = ['rock', 'paper', 'scissors']
let result;
let round = 0


function computerPlay() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
}



function playRound (playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'You Lose, paper beats rock'
        return result
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'You Win, rock beats scissors'
        return result
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        result = 'Tied'
        return result
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'You Lose, scissors beat paper'
        return result
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'You Win, paper beats rock'
        return result
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        result = 'Tied'
        return result
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'You Lose, rock beats scissors'
        return result
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'You Win, scissors beat paper'
        return result
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        result = 'Tied'
        return result
    } else {
        return 'Error'
    }
}

function game() {
    
        playRound()
        round += 1
        console.log('round ' + round)
        console.log('Player selection: ' + playerSelection)
        console.log('Computer selection: ' + computerSelection)
        console.log(result)
    }    



const playerSelection  = window.prompt('rock, paper or scissors');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


game()


