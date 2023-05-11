#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
import gameWrapper from '../src/index.js';

function getOperand() {
  const randomNumber = Math.random() * 100;
  return Math.round(randomNumber);
}

function getRandomOperator() {
  const availableOperators = ['+', '-', '*'];
  const randomIdx = Math.floor(Math.random() * availableOperators.length);
  return availableOperators[randomIdx];
}

function calculateExpression(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`No logic found for operator ${operator}`);
  }
}

function calcGame() {
  console.log('What is the result of the expression?');

  const name = getName();
  const numberAttemps = 3;
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const firstOperand = getOperand();
    const secondOperand = getOperand();
    const mathOperator = getRandomOperator();
    const result = calculateExpression(
      firstOperand,
      secondOperand,
      mathOperator
    );
    console.log(`Question: ${firstOperand} ${mathOperator} ${secondOperand}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const isCorrectAnswer = answer === result;

    if (isCorrectAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      break;
    }
  }

  if (correctAnswers === numberAttemps) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

gameWrapper(calcGame);
