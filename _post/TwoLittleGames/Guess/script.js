'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   console.log(guess); });

// Math.random() is a random number form 0 to 1.
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When Win
  } else if (guess === SecretNumber) {
    // document.querySelector('.message').textContent = '🫡 Correct Number!';
    displayMessage('🥳 Correct Number!');

    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When NOT WIN
  } else if (guess != SecretNumber) {
    // When guess is high OR low
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > SecretNumber ? '🤺 Too higt!' : '🤺 Too low!';
      displayMessage(guess > secretNumber ? '🤺 Too higt!' : '🤺 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💣💥 You lost the game!';
      displayMessage('💣💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is low
  // } else if (guess < SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🤺 Too low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💣💥 You lost the game!';

  // When guess is high
  // } else if (guess > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🤺 Too high';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💣💥 You lost the game!';
});

//
//
//
//
// Challenge: Click Again
document.querySelector('.again').addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.highsore').textContent =
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// 源代码
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
