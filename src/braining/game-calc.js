import startGame, { getRandomNumber } from '../app.js';

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

const stageCalcGame = () => {
  const question = 'What is the result of the expression?';

  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const setOperators = ['+', '-', '*'];

  const taskCalculator = () => {
    const randomOperator = setOperators[Math.floor(Math.random() * (setOperators.length - 1))];

    const questStage = `${firstOperand} ${randomOperator} ${secondOperand}`;
    const answerCorrect = String(getCalculate(firstOperand, randomOperator, secondOperand));

    return [questStage, answerCorrect];
  };

  startGame(question, taskCalculator);
};

export default stageCalcGame;
