import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

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

const getQuestionAndAnswer = () => {
  const gameProgression = getProgression();
  const hiddenSequence = getRandomNumber(0, gameProgression.length);
  const answer = String(gameProgression[hiddenSequence]);

  gameProgression[hiddenSequence] = '..';

  const question = gameProgression.join(' ');

  return [question, answer];
};

const startProgressionGame = () => startGame(description, getQuestionAndAnswer);

export default startProgressionGame;
