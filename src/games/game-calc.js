import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';
const setOperators = ['+', '-', '*'];

const getCalculate = (firstOperand, calcOperator, secondOperand) => {
  let result;

  switch (calcOperator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      console.log(`Undefined operator char: '${calcOperator}'!`);
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 50);

  const randomOperator = setOperators[Math.floor(Math.random() * (setOperators.length - 1))];

  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const answer = String(getCalculate(firstOperand, randomOperator, secondOperand));

  return [question, answer];
};

const startCalcGame = () => startGame(description, getQuestionAndAnswer);

export default startCalcGame;
