let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! You both picked " + playerSelection + "!"
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock!"
    }
    else {
        humanScore++;
        return "You win! Rock beats Scissors!"
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper!"
    }
    else {
        humanScore++;
        return "You win! Paper beats Rock!"
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors!"
    }
    else {
        humanScore++;
        return "You win! Scissors beats Paper!"
    }
  }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?", "").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log(humanScore);
        console.log(computerScore);
        if (humanScore === 3 || computerScore === 3) {
            i = 5;
            console.log("End of game")
        }
    }
    if (humanScore === computerScore) {
        console.log("It's a tie!")
    }
    else if (humanScore >> computerScore) {
        console.log("You win!")
    }
    else {
        console.log("You lose!")
    }
}

game()