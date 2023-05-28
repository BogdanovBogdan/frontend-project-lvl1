#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { gameWrapper, getRandomNumber } from '../src/index.js';

function getLesserAndGreaterNums(a, b) {
  if (a > b) return [a, b];
  return [b, a];
}

function hasRemainderDivision(greaterNum, lesserNum) {
  return greaterNum % lesserNum;
}

function calculateGCD(greaterNum, lesserNum) {
  if (lesserNum === 0) return greaterNum;
  return calculateGCD(lesserNum, greaterNum % lesserNum);
}

function getGCDNumber(a, b) {
  const [greaterNum, lesserNum] = getLesserAndGreaterNums(a, b);

  if (!hasRemainderDivision(greaterNum, lesserNum)) {
    return lesserNum;
  }

  const GCDNumber = calculateGCD(greaterNum, lesserNum);
  return `${GCDNumber}`;
}

function gcdGame({ numberAttemps = 3, userName }) {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const [firstNum, secondNum] = getRandomNumber({
      max: 100,
      amountNumber: 2,
    });

    const gcdNumber = getGCDNumber(firstNum, secondNum);

    console.log(`Question: ${firstNum} ${secondNum}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (gcdNumber === answer) {
      console.log('Correct');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong anser( Correct ansewer was ${gcdNumber}`);
      break;
    }
  }

  if (correctAnswers === numberAttemps) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

gameWrapper(gcdGame);
