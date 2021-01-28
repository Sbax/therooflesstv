import { randomFromArray, randomNumber, sumUpTo } from './utils';

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
  const maxRarity = sumUpTo(10);
  const rarityIndex = randomNumber(0, maxRarity);

  const filteredByRarity = list.filter(
    ({ rarity }) => rarityIndex >= sumUpTo(rarity)
  );

  const legendaryRandom = randomNumber(0, 100);
  if (legendaryRandom > 5) {
    return randomFromArray(
      filteredByRarity.filter(({ legendary }) => !legendary)
    );
  }

  return randomFromArray(filteredByRarity);
};
