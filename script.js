'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '!!! Correct Number';
// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 20;

const secretnumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore= 0;
console.log(secretnumber);
document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click',function(){

const guess= Number(document.querySelector('.guess').value)
console.log(guess)

if(!guess){
  document.querySelector('.message').textContent= '⛔NOT A NUMBER'
}else if(guess>secretnumber){
  if(score>1){
    document.querySelector('.message').textContent= '⛔TOO HIGH....';
    score--;
    document.querySelector('.score').textContent = score;
  }
  else{
    document.querySelector('.message').textContent= '🤦‍♂️YOU LOST';
    document.querySelector('.score').textContent = 0;
  }

 

}else if(guess<secretnumber){if(score>1){
  document.querySelector('.message').textContent= '⛔TOO LOW....';
  score--;
  document.querySelector('.score').textContent = score;
}
else{
  document.querySelector('.message').textContent= '🤦‍♂️YOU LOST';
  document.querySelector('.score').textContent = 0;
}
}
else if(guess===secretnumber){
  document.querySelector('.message').textContent= '🎊CORRECT NUMBER!!!'
  document.querySelector('body').style.backgroundColor= '#63b347'
  document.querySelector('.number').style.width = '30rem'
}

})
