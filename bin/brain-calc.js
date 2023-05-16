#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { gameWrapper, getRandomNumber } from '../src/index.js';

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

function calcGame({ numberAttemps = 3, userName }) {
  console.log('What is the result of the expression?');
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const [firstOperand, secondOperand] = getRandomNumber(10);
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
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

gameWrapper(calcGame);
