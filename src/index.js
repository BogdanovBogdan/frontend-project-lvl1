#!/usr/bin/env node

import greeting from './cli.js';

export function getRandomNumber({ min = 1, max = 100, amountNumbers = 2 }) {
  const numbers = [];
  for (let i = 0; i < amountNumbers; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
  }
  return numbers;
}

export function gameWrapper(game) {
  const userName = greeting();
  game({ userName });
}
