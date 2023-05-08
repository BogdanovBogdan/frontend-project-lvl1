import readlineSync from 'readline-sync';

let name = 'no name';

export default function greeting() {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
}

export function getName() {
  return name;
}
