#!/usr/bin/env node
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

function calcGame() {
  const rules = () => {
    console.log('What is the result of the expression?');
  };

  const run = () => {
    const [firstOperand, secondOperand] = getRandomNumber({ max: 10 });
    const mathOperator = getRandomOperator();
    const question = `${firstOperand} ${mathOperator} ${secondOperand}`;
    const correctAnswer = calculateExpression(
      firstOperand,
      secondOperand,
      mathOperator,
    );

    return { question, correctAnswer };
  };

  return { rules, run };
}

gameWrapper(calcGame);
