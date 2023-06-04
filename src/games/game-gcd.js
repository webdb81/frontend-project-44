import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (dividend, divisor) => {
  if (divisor === 0) {
    return dividend;
  }

  const result = getGCD(divisor, dividend % divisor);

  return result;
};

const getQuestionAndAnswer = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = String(getGCD(firstOperand, secondOperand));

  return [question, answer];
};

const startGcdGame = () => startGame(description, getQuestionAndAnswer);

export default startGcdGame;
