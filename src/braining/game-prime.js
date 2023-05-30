import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num !== 1;
};

const stagePrimeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const taskPrime = () => {
    const questStage = getRandomNumber(2, 50);
    const answerCorrect = isPrime(questStage) ? 'yes' : 'no';

    return [questStage, answerCorrect];
  };

  startGame(question, taskPrime);
};

export default stagePrimeGame;
