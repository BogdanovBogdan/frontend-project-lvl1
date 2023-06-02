#!/usr/bin/env node

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
  return GCDNumber;
}

function gcdGame() {
  const rules = () => {
    console.log('Find the greatest common divisor of given numbers.');
  };

  const run = () => {
    const [firstNum, secondNum] = getRandomNumber({
      max: 100,
      amountNumber: 2,
    });
    const correctAnswer = getGCDNumber(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;

    return { question, correctAnswer };
  };

  return { rules, run };
}

gameWrapper(gcdGame);
