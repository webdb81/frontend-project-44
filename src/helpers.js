// const getRandomNumber = () => Math.floor(Math.random() * 100);

/**
 * Boundaries of random numbers:
 * (randomTo - randomFrom)) + randomFrom
 * excluding randomTo         including randomFrom
 */
// eslint-disable-next-line max-len
const getRandomNumber = (randomFrom, randomTo) => Math.floor(Math.random() * (randomTo - randomFrom)) + randomFrom;

export default getRandomNumber;
