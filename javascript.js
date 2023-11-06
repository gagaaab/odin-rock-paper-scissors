let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
    message.textContent = "It's a tie! You both picked " + playerSelection + "!"
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
        computerScore++;
        message.textContent = "You lose! Paper beats Rock!"
    }
    else {
        humanScore++;
        message.textContent = "You win! Rock beats Scissors!"
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
        computerScore++;
        message.textContent = "You lose! Scissors beats Paper!"
    }
    else {
        humanScore++;
        message.textContent = "You win! Paper beats Rock!"
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        computerScore++;
        message.textContent = "You lose! Rock beats Scissors!"
    }
    else {
        humanScore++;
        message.textContent = "You win! Scissors beats Paper!"
    }
  }
}
const pScore = document.querySelector('#pScore')
const cScore = document.querySelector('#cScore')
const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        let playerSelection = 'rock'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        pScore.textContent = 'Player Score: ' + humanScore;
        cScore.textContent = 'Computer Score: ' + computerScore;
        game()});

const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        let playerSelection = 'paper'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        pScore.textContent = 'Player Score: ' + humanScore;
        cScore.textContent = 'Computer Score: ' + computerScore;
        game()});

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        let playerSelection = 'scissors'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        pScore.textContent = 'Player Score: ' + humanScore;
        cScore.textContent = 'Computer Score: ' + computerScore;
        game()});

const message = document.querySelector('#message')

function game() {
    if (humanScore === 5) {
        message.textContent = "You win!";
        button = document.createElement('button')
        button.id = 'playAgainButton'
        button.textContent = "Play again"
        playAgain.appendChild(button)
        button.addEventListener('click', () => {
            window.location.reload()
        })
    }

    if (computerScore === 5) {
        message.textContent = "You lose!";
        button = document.createElement('button')
        button.id = 'playAgainButton'
        button.textContent = "Play again"
        playAgain.appendChild(button)
        button.addEventListener('click', () => {
            window.location.reload()
        })
    }
}