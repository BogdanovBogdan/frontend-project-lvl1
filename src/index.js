#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from './cli.js';

export function getRandomNumber({ min = 1, max = 100, amountNumbers = 2 }) {
  const numbers = [];
  for (let i = 0; i < amountNumbers; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
  }
  return numbers;
}

export function gameWrapper(game) {
  const { rules, run } = game();
  let userName;
  let totalAttempts;
  let correctAnswers;

  const initGame = () => {
    userName = greeting();
    rules();
    totalAttempts = 3;
    correctAnswers = 0;
  };

  const checkResults = () => {
    if (correctAnswers === totalAttempts) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };

  const playGame = () => {
    for (let attempts = 0; attempts < totalAttempts; attempts += 1) {
      const { question, correctAnswer } = run();
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      const isCorrectAnswer = answer === String(correctAnswer);

      if (isCorrectAnswer) {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
        );
        break;
      }
    }

    checkResults();
  };

  initGame();
  playGame();
}
