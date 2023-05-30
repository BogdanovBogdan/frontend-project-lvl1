#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { gameWrapper, getRandomNumber } from '../src/index.js';

function checkIsPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function primeGame({ numberAttemps = 3, userName }) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const [number] = getRandomNumber({ max: 100 });

    const isPrime = checkIsPrime(number);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (isPrime && answer === 'yes') {
      console.log('Correct');
      correctAnswers += 1;
    } else if (!isPrime && answer === 'no') {
      console.log('Correct');
      correctAnswers += 1;
    } else {
      console.log(
        `${answer} is wrong answer( ${number} is ${
          isPrime ? '' : 'not'
        } the prime number`
      );
      break;
    }
  }

  if (correctAnswers === numberAttemps) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

gameWrapper(primeGame);

