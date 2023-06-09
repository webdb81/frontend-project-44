import readlineSync from 'readline-sync';

const rounds = 3;

const startGame = (question, generateQuest) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  console.log(`${question}`);

  for (let i = 0; i < rounds; i += 1) {
    const [questionGame, answerCorrect] = generateQuest();
    console.log(`Question: ${questionGame}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (answerCorrect === answerUser) {
      console.log('Correct!');
    } else {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
