import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (chekingNumber) => chekingNumber % 2 === 0;

const stageEvenGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskNumber = () => {
    const questStage = getRandomNumber(1, 100);

    const answerCorrect = isEven(questStage) ? 'yes' : 'no';

    return [questStage, answerCorrect];
  };

  startGame(question, taskNumber);
};

export default stageEvenGame;
