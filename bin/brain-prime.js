#!/usr/bin/env node

import { gameWrapper, getRandomNumber } from '../src/index.js';

function checkIsPrime(number) {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function primeGame() {
  const rules = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  };
  const run = () => {
    const [number] = getRandomNumber({ max: 100 });
    const isPrime = checkIsPrime(number);
    const question = number;
    const correctAnswer = isPrime ? 'yes' : 'no';

    return { question, correctAnswer };
  };

  return { rules, run };
}

gameWrapper(primeGame);
