#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { gameWrapper, getRandomNumber } from '../src/index.js';

function isEven(number) {
  const isEvenNumber = number % 2 === 0;
  return isEvenNumber;
}

function evenGame({ numberAttemps = 3, userName }) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const [randomNumber] = getRandomNumber({ max: 1000, amountNumber: 1 });
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isEvenNumber = isEven(randomNumber);

    if (isEvenNumber && answer === 'yes') {
      console.log('Correct!');
      correctAnswers += 1;
    } else if (isEvenNumber && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
      break;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    }
  }

  if (correctAnswers === numberAttemps) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

gameWrapper(evenGame);
