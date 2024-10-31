'use strict';
/*
console.log(document.querySelector('.messsage').textContent);
document.querySelector('.messsage').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔️ No number!';
      displayMessage('⛔️ No number!');
      // When it's a correct Guess
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎃 Correct Number';
      displayMessage('🎃 Correct Number');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    // When guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        /*
        document.querySelector('.message').textContent =
          guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
           */

        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '😞 You Lost';
        displayMessage('😞 You Lost');
        document.querySelector('.score').textContent = 0;
      }
    }

    /*
    // When guess is too High
    else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😞 You Lost';
        document.querySelector('.score').textContent = 0;
      }
      // When guess is too Low
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😞 You Lost';
        document.querySelector('.score').textContent = 0;
      }
    }
    */
  });
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
