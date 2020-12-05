const randomNumber = (min = 0, max = 255) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const catchMon = (ballModifier, catchRate) => {
  if (ballModifier === 0) return true;

  const M = 100;
  const H = 25;

  const X = ((3 * M - 2 * H) * catchRate * ballModifier) / (3 * M);

  if (X > 255) return true;

  const Y = 65536 / Math.sqrt(Math.sqrt(255 / X));

  const firstAttempt = randomNumber(0, 65535);
  if (firstAttempt > Y) return false;

  const secondAttempt = randomNumber(0, 65535);
  if (secondAttempt > Y) return false;

  const thirdAttempt = randomNumber(0, 65535);
  if (thirdAttempt > Y) return false;

  return true;
};

export const randomMon = (list) => {
  return randomFromArray(list);
};
