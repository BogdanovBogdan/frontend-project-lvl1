import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomNumber() {
  const randomNumber = Math.random() * 100;
  return Math.round(randomNumber);
}

function isEven(number) {
  const isEvenNumber = number % 2 === 0;
  return isEvenNumber ? 'yes' : 'no';
}

export default function isEvenGame() {
  const name = getName();
  const numberAttemps = 3;
  let correctAnswers = 0;

  for (let i = 0; i < numberAttemps; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isEvenNumber = isEven(randomNumber);

    if (isEvenNumber === answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else if (isEvenNumber && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
      break;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    }
  }

  if (correctAnswers === numberAttemps) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
