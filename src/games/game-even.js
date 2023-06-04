import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (chekingNumber) => chekingNumber % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startEvenGame = () => startGame(description, getQuestionAndAnswer);

export default startEvenGame;
