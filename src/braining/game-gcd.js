import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getGCD = (dividend, divisor) => {
  if (divisor === 0) {
    return dividend;
  }

  const result = getGCD(divisor, dividend % divisor);

  return result;
};

const stageGcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);

  const taskGCD = () => {
    const questStage = `${firstOperand} ${secondOperand}`;
    const answerCorrect = String(getGCD(firstOperand, secondOperand));

    return [questStage, answerCorrect];
  };

  startGame(question, taskGCD);
};

export default stageGcdGame;
