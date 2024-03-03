let playerScore = 0;
let computerScore = 0;

// getters
function getPlayerScore(){
  return playerScore;
}
function getComputerScore(){
  return computerScore;
}

function generateComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3)
  if (randomNum === 0) {
    return 'Rock'
  }else if (randomNum === 1) {
    return 'Paper'
  }else {
    return 'scissors'
  }
}


//game logic
function playRound(ps, cs) {
  let playerSelection =  ps.toLowerCase()
  let computerSelection = cs.toLowerCase()

  if(playerSelection === 'rock'){
    if(computerSelection==='rock') {
      return "Tie"
    }else if (computerSelection === 'paper') {
      computerScore++;
      return "Computer +1pt"
    }else if (computerSelection === "scissors" ){
      playerScore++;
      return "Player +1pt"
    }
  }else if (playerSelection === 'paper'){
    if(computerSelection==='rock') {
      playerScore++;
      return "Player +1pt"
    }else if (computerSelection === 'paper') {
      return "Tie"
    }else if (computerSelection === "scissors" ){
      computerScore++;
      return "Computer +1pt"
    }
  } else if (playerSelection === 'scissors'){
    if(computerSelection==='rock') {
      computerScore++;
      return "Computer +1pt"
    }else if (computerSelection === 'paper') {
      playerScore++;
      return "Player +1pt"
    }else if (computerSelection === "scissors" ){
      return "Tie"
    }
  }
}

function displayScores(){
  if(playerScore<5&&computerScore<5){
    return `Player: ${getPlayerScore()} Computer: ${getComputerScore()}`;
  } else if(playerScore>=5){
    resetScores();
    return 'Winner: Player';
  }else if(computerScore>=5){
    resetScores();
    return 'Winner: Computer';
  }
}

function resetScores(){
  playerScore = 0;
  computerScore = 0;
}



// Display results 
const display = document.querySelector('.result-display');
const pointText = document.createElement('p');
const resultText = document.createElement('p');
resultText.innerHTML = 'Plater: 0 Computer: 0'

display.appendChild(pointText);
display.appendChild(resultText);


// EventHandler for buttons
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const btns = document.querySelectorAll('.btn');




rockButton.addEventListener('click', () => {
  pointText.innerHTML = playRound('rock', generateComputerChoice());
  resultText.textContent = displayScores();
  console.log(displayScores());
});
paperButton.addEventListener('click', () => {
  pointText.innerHTML = playRound('paper', generateComputerChoice());
  resultText.textContent = displayScores();

  console.log(displayScores());

});
scissorsButton.addEventListener('click', () => {
  pointText.innerHTML = playRound('scissors', generateComputerChoice());
  resultText.textContent = displayScores();
  console.log(displayScores());
});

