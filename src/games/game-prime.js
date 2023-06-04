import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num !== 1;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 50);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startPrimeGame = () => startGame(description, getQuestionAndAnswer);

export default startPrimeGame;
