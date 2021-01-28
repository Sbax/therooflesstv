export const randomNumber = (min = 0, max = 255) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const randomFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const sumUpTo = (n) => (n * (n + 1)) / 2;
