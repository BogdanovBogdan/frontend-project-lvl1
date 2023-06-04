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
    const lengthOfProgressionOptions = { min: 6, max: 10, amountNumbers: 1 };
    const firstNumberOptions = { max: 1000, amountNumbers: 1 };
    const stepProgressionOptions = { min: 2, max: 10, amountNumbers: 1 };

    const [lengthOfProgression] = getRandomNumber(lengthOfProgressionOptions);
    const [firstNumberProgression] = getRandomNumber(firstNumberOptions);
    const [stepProgression] = getRandomNumber(stepProgressionOptions);

    const progression = getProgression(
      lengthOfProgression,
      firstNumberProgression,
      stepProgression,
    );
    const hiddenNumber = hideNumberProgression(progression);
    const question = `${progression.join(' ')}`;

    return { question, correctAnswer: hiddenNumber };
  };

  return { rules, run };
}

gameWrapper(progressionGame);
