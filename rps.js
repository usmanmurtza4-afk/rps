'use strict'

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.trunc(Math.random() * 3) + 1;
  if (num === 1) return 'Rock';
  if (num === 2) return 'Paper';
  return 'Scissors';
}

function getWinner(player, computer) {
  if (player === computer) return "It's a Draw!";
  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
   playerScore++;
    document.querySelector('.player-score').textContent = playerScore;
    return "You Win! 🎉";
  } else{
  computerScore++;
  document.querySelector('.computer-score').textContent = computerScore;
  return "Computer Wins! 💻";
  }

}


document.querySelector('.rock').addEventListener('click',function(){
   let cc = getComputerChoice();
   document.querySelector('.choice1').textContent='Rock';
   document.querySelector('.choice2').textContent=cc;
   document.querySelector('.message').textContent = getWinner('Rock', cc);

    if(playerScore===10){
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.finaltxt').textContent="Player wins";
    }

      if(computerScore===10){
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.finaltxt').textContent="Computer wins";
    }
  });

document.querySelector('.paper').addEventListener('click',function(){
   let cc = getComputerChoice();
   document.querySelector('.choice1').textContent='Paper';
   document.querySelector('.choice2').textContent=cc;
  document.querySelector('.message').textContent = getWinner('Paper', cc);
  
   if(playerScore===10){
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.finaltxt').textContent="Player wins";
    }

      if(computerScore===10){
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.finaltxt').textContent="Computer wins";
    }
  });

document.querySelector('.scissors').addEventListener('click',function(){
   let cc = getComputerChoice();
   document.querySelector('.choice1').textContent='Scissors';
   document.querySelector('.choice2').textContent=cc;
   document.querySelector('.message').textContent = getWinner('Scissors', cc);  

    if(playerScore===10){
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.finaltxt').textContent="Player wins";
    }

      if(computerScore===10){
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.finaltxt').textContent="Computer wins";
    }
  });

document.querySelector('button').addEventListener('click',function(){
   document.querySelector('.choice1').textContent='?';
   document.querySelector('.choice2').textContent='?';
   document.querySelector('.message').textContent='Start the game...';
     playerScore = 0;
  computerScore = 0;
  document.querySelector('.player-score').textContent = 0;
  document.querySelector('.computer-score').textContent = 0;
})  ;

document.querySelector('.close-modal').addEventListener('click',function(){
   document.querySelector('.choice1').textContent='?';
   document.querySelector('.choice2').textContent='?';
   document.querySelector('.message').textContent='Start the game...';
     playerScore = 0;
  computerScore = 0;
  document.querySelector('.player-score').textContent = 0;
  document.querySelector('.computer-score').textContent = 0;
  document.querySelector('.modal').classList.add('hidden');
})  ;





   
