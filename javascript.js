let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie! You both picked " + playerSelection + "!")
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
        computerScore++;
        alert("You lose! Paper beats Rock!")
    }
    else {
        humanScore++;
        alert("You win! Rock beats Scissors!")
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
        computerScore++;
        alert("You lose! Scissors beats Paper!") 
    }
    else {
        humanScore++;
        alert("You win! Paper beats Rock!") 
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        computerScore++;
        alert("You lose! Rock beats Scissors!") 
    }
    else {
        humanScore++;
        alert("You win! Scissors beats Paper!") 
    }
  }
}

const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        let playerSelection = 'rock'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        
        const pScore = document.querySelector('#pScore')
        pScore.textContent = 'Player Score: ' + humanScore;
        
        const cScore = document.querySelector('#cScore')
        cScore.textContent = 'Computer Score: ' + computerScore;
        game()});

const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        let playerSelection = 'paper'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)

        const pScore = document.querySelector('#pScore')
        pScore.textContent = 'Player Score: ' + humanScore;
        
        const cScore = document.querySelector('#cScore')
        cScore.textContent = 'Computer Score: ' + computerScore;
        game()});

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        let playerSelection = 'scissors'
        let computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
        
        const pScore = document.querySelector('#pScore')
        pScore.textContent = 'Player Score: ' + humanScore;
        
        const cScore = document.querySelector('#cScore')
        cScore.textContent = 'Computer Score: ' + computerScore;
        game()});

function game() {
    if (humanScore === 5) {
        alert("You win!");
        humanScore = 0;
        computerScore = 0;

        pScore.textContent = 'Player Score: ' + humanScore;        
        cScore.textContent = 'Computer Score: ' + computerScore;
    }
    if (computerScore === 5) {
        alert("You lose!");
        humanScore = 0;
        computerScore = 0;

        pScore.textContent = 'Player Score: ' + humanScore;        
        cScore.textContent = 'Computer Score: ' + computerScore;
    }
}