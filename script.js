'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    document.querySelector('.message').textContent = 'No Guess Number!';
  }
  else if(guess === secretNumber){
    document.querySelector(".message").textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } 
  }
  else if(guess !== secretNumber){
    if(score > 1){
      document.querySelector(".message").textContent =       guess>secretNumber ? 'To High!' : 'To Low!';
      score -= 1; 
    }else{
      score -=1;
      document.querySelector('.message').textContent = 'You lost the Game!';
    }  
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click',
   function(){
     score = 20;
     document.querySelector('.score').textContent = score;
     secretNumber = Math.trunc(Math.random() * 20) + 1;

     document.querySelector('.message').textContent = 'Start guessing...';

     document.querySelector('.number').textContent = '?';

     document.querySelector('body').style.backgroundColor = '#222';

     document.querySelector('.number').style.width = '15rem';
   } 
);
