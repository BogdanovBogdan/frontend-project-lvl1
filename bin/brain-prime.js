#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { gameWrapper, getRandomNumber } from '../src/index.js';

function checkIsPrime(number) {
  if (number === 1) {
    return 'no';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
}

function primeGame({ numberAttemps = 3, userName }) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const [number] = getRandomNumber({ max: 100 });

    const isPrime = checkIsPrime(number);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isCorrectAnswer = isPrime === answer;

    if (isCorrectAnswer) {
      console.log('Correct');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer. Correct answer was ${isPrime}`);
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

/** todo: почитать:
 * 1) https://skysmart.ru/articles/mathematic/chto-takoe-kvadratnyj-koren
 * 2) https://www.youtube.com/watch?v=s8zUK5jmXA4
 * 3) https://qna.habr.com/q/587696
 * 4) https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%B8%D0%BA%D0%B0%D1%82
 * 5) https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D1%85_%D1%87%D0%B8%D1%81%D0%B5%D0%BB#%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_500_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D1%85_%D1%87%D0%B8%D1%81%D0%B5%D0%BB
 */
