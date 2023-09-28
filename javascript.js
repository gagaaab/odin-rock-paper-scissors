let choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

console.log(getComputerChoice())

function playRound(playerSelection,computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return "It's a tie! You both picked " + playerSelection.toLowerCase() + "!"
  }
}

let playerSelection = prompt("Rock, paper or scissors?", "")
let computerSelection = getComputerChoice()
console.log(playRound(playerSelection,computerSelection))