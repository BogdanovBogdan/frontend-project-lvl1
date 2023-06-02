#!/usr/bin/env node

import { gameWrapper, getRandomNumber } from '../src/index.js';

function isEven(number) {
  return number % 2 === 0;
}

function evenGame() {
  const rules = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  };

  const run = () => {
    const [randomNumber] = getRandomNumber({ max: 1000, amountNumber: 1 });
    const isEvenNumber = isEven(randomNumber);
    const correctAnswer = isEvenNumber ? 'yes' : 'no';

    return { question: randomNumber, correctAnswer };
  };

  return { rules, run };
}

gameWrapper(evenGame);
