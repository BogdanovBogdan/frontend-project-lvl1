#!/usr/bin/env node

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
  return hiddenNumber;
}

function progressionGame() {
  const rules = () => {
    console.log('What number is missing in the progression?');
  };

  const run = () => {
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
    const question = `${progression.join(' ')}`;
    const correctAnswer = hideNumberProgression(progression);

    return { question, correctAnswer };
  };

  return { rules, run };
}

gameWrapper(progressionGame);
