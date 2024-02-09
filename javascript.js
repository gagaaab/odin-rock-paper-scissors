let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const playerSelected = document.querySelector("#playerSelected")
const computerSelected = document.querySelector("#computerSelected")


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === "rock") {
        icon = "icons/rock-icon.svg"
    }
    if (playerSelection === "paper") {
        icon = "icons/paper-icon.svg"
    }
    if (playerSelection === "scissors") {
        icon = "icons/scissors-icon.svg"
    }
    playerIcon = document.querySelector("#playerIcon")
    playerIcon.src = icon
    playerIcon.style.transform = 'rotate(90deg)'
  
    if (computerSelection === "rock") {
        icon = "icons/rock-icon.svg"
    }
    if (computerSelection === "paper") {
        icon = "icons/paper-icon.svg"
    }
    if (computerSelection === "scissors") {
        icon = "icons/scissors-icon.svg"
    }
    computerIcon = document.querySelector("#computerIcon")
    computerIcon.src = icon
    computerIcon.style.transform = 'rotateX(180deg) rotate(270deg)'
    if (humanScore === 5 || computerScore === 5){
        message.textContent = "Press play again"
    }
  else if (playerSelection === computerSelection) {
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
        if (humanScore < 5 && computerScore < 5) {
        let playerSelection = 'rock'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        pScore.textContent = humanScore;
        cScore.textContent = computerScore;
        game()
        }});

const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5) {
        let playerSelection = 'paper'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        pScore.textContent = humanScore;
        cScore.textContent = computerScore;
        game()
        }});

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5) {
        let playerSelection = 'scissors'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        pScore.textContent = humanScore;
        cScore.textContent = computerScore;
        game()
        }});

const message = document.querySelector('#message')
const playAgain = document.querySelector('#playAgain')

function game() {
    if (humanScore === 5) {
        message.textContent = "";
        message.style.height = 0;
        button = document.createElement('button')
        button.id = 'playAgainButton'
        button.textContent = "Yawa kyko do."
        playAgain.appendChild(button)
        button.addEventListener('click', () => {
            window.location.reload()
        })
    }

    if (computerScore === 5) {
        message.textContent = "";
        message.style.height = 0;
        button = document.createElement('button')
        button.id = 'playAgainButton'
        button.textContent = "Yawa kyko do."
        playAgain.appendChild(button)
        button.addEventListener('click', () => {
            window.location.reload()
        })
    }
}