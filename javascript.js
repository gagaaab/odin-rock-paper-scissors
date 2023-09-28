let choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! You both picked " + playerSelection + "!"
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
        return "You lose! Paper beats Rock!"
    }
    else {
        return "You win! Rock beats Scissors!"
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
        return "You lose! Scissors beats Paper!"
    }
    else {
        return "You win! Paper beats Rock!"
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        return "You lose! Rock beats Scissors!"
    }
    else {
        return "You win! Scissors beats Paper!"
    }
  }
}

let playerSelection = prompt("Rock, paper or scissors?", "").toLowerCase()
let computerSelection = getComputerChoice()
console.log(playRound(playerSelection,computerSelection))