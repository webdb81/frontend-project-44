import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getProgression = () => {
  const startProgression = getRandomNumber(1, 20);
  const stepProgression = getRandomNumber(1, 6);
  const lengthProgression = 10;
  const progression = [];

  for (let i = 0; i <= lengthProgression; i += 1) {
    progression.push(startProgression + i * stepProgression);
  }

  return progression;
};

const stageProgressionGame = () => {
  const question = 'What number is missing in the progression?';

  const taskProgression = () => {
    const gameProgression = getProgression();
    const hiddenSequence = getRandomNumber(0, gameProgression.length);
    const answerCorrect = String(gameProgression[hiddenSequence]);

    gameProgression[hiddenSequence] = '..';

    const questStage = gameProgression.join(' ');

    return [questStage, answerCorrect];
  };

  startGame(question, taskProgression);
};

export default stageProgressionGame;
