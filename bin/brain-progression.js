#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { gameWrapper, getRandomNumber } from '../src/index.js';

function getProgression(
  lengthOfProgression,
  firstNumberProgression,
  stepProgression,
) {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const number = firstNumberProgression + stepProgression * i;
    progression.push(number);
  }

  return progression;
}

function hideNumberProgression(progression) {
  const positionOfNumber = getRandomNumber({
    max: progression.length - 1,
    amountNumbers: 1,
  });

  const [hiddenNumber] = progression.splice(positionOfNumber, 1, '..');
  return String(hiddenNumber);
}

function progressionGame({ numberAttemps = 3, userName }) {
  console.log('What number is missing in the progression?');
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const [lengthOfProgression] = getRandomNumber({
      min: 6,
      max: 10,
      amountNumbers: 1,
    });
    const [firstNumberProgression] = getRandomNumber({
      max: 1000,
      amountNumbers: 1,
    });
    const [stepProgression] = getRandomNumber({
      min: 2,
      max: 10,
      amountNumbers: 1,
    });

    const progression = getProgression(
      lengthOfProgression,
      firstNumberProgression,
      stepProgression,
    );

    const hiddenNumber = hideNumberProgression(progression);

    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (hiddenNumber === answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `${answer} is wrong answer(. Correct answer was ${hiddenNumber}`,
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

gameWrapper(progressionGame);
