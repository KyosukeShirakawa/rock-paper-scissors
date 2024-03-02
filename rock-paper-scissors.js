function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3)

  if (randomNum === 0) {
    return 'Rock'
  }else if (randomNum === 1) {
    return 'Paper'
  }else {
    return 'scissors'
  }
}



function playRound(ps, cs) {

  let playerSelection =  ps.toLowerCase()
  let computerSelection = cs.toLowerCase()

  if(playerSelection === 'rock'){
    if(computerSelection==='rock') {
      return "Tie"
    }else if (computerSelection === 'paper') {
      return "You Lose.."
    }else if (computerSelection === "scissors" ){
      return "You Win!!"
    }
  }else if (playerSelection === 'paper'){
    if(computerSelection==='rock') {
      return "You Win!!"
    }else if (computerSelection === 'paper') {
      return "Tie"
    }else if (computerSelection === "scissors" ){
      return "You Lose.."
    }
  } else if (playerSelection === 'scissors'){
    if(computerSelection==='rock') {
      return "You Lose.."
    }else if (computerSelection === 'paper') {
      return "You Win!!"
    }else if (computerSelection === "scissors" ){
      return "Tie"
    }
  }

}


/*
function playGame() {

  let playerSelection;
  let computerSelection;
  let winCnt =0;
  for (let i = 0; i<5;i++){
    playerSelection = prompt("Please enter rock, paper or scissors");
    computerSelection = getComputerChoice();
    let result = playSingle(playerSelection, computerSelection)
    if(result === "You Win!!"){
      winCnt++;
      console.log("You Win!!")
    }else if(result === "You Lose.."){
      winCnt--;
      console.log("You Lose..")
    }else {
      console.log("Tie")
    }
  }
  if(winCnt > 0){
    console.log("Winner: Player")
  }else if(winCnt === 0){
    console.log("Winner: It's a draw");
  }else{
    console.log("Winner: Computer");
  }

}
*/

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const display = document.querySelector('.result-display');


/* Display results */




/* Add EventHandler to rock paper scissor buttons */
rockButton.addEventListener('click', () => {
  console.log(playRound('rock', getComputerChoice()));
});
rockButton.addEventListener('click', () => {
  console.log(playRound('rock', getComputerChoice()));
});
paperButton.addEventListener('click', () => {
  console.log(playRound('paper', getComputerChoice()));
});
scissorsButton.addEventListener('click', () => {
  console.log(playRound('scissors', getComputerChoice()));
});

