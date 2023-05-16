#!/usr/bin/env node

import greeting from './cli.js';

export function getRandomNumber(upNumber = 100, amountNumbers = 2) {
  const numbers = [];
  for (let i = 0; i < amountNumbers; i += 1) {
    const randomNumber = Math.round(Math.random() * upNumber);
    numbers.push(randomNumber);
  }
  return numbers;
}

export function gameWrapper(game) {
  const userName = greeting();
  game({ userName });
}
