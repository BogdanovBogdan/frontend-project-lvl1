import readlineSync from 'readline-sync';

let name = 'No name';

export default function greeting() {
  try {
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    return name;
  } catch (error) {
    console.log(`Failed to get name. Error: ${error}`);
    return name;
  }
}
