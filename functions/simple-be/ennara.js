const sheets = require('./sheets');
const { getSheet } = sheets;

const utils = require('./utils');
const { toKebabCase } = utils;

const ennaraSpreadsheet = process.env.ENNARA_SHEET;

const getPlayers = () =>
  getSheet(ennaraSpreadsheet, 'Players!A2:IX')
    .then(
      (response) =>
        (response || []).reduce(
          (
            { players },
            [number, name, housing, items, creatures, gold, amumu]
          ) => ({
            players: [
              ...players,
              {
                number,
                name,
                slug: toKebabCase(name),
                housing: parseInt(housing),
                items: parseInt(items),
                creatures: parseInt(creatures),
                gold: parseInt(gold),
                amumu: parseInt(amumu),
              },
            ],
          }),
          {
            players: [],
          }
        ).players
    )
    .catch((error) => error);

const getRewards = () =>
  getSheet(ennaraSpreadsheet, 'Rewards!A1:B')
    .then((response) => {
      const [[legendary], [ultrarare], [rare], headers, ...items] = response;

      const { rewards } = (items || []).reduce(
        ({ rewards }, [name, rarity]) => ({
          rewards: [
            ...rewards,
            {
              name,
              rarity: parseInt(rarity),
            },
          ],
        }),
        {
          rewards: [],
        }
      );

      return {
        rarities: {
          legendary: parseInt(legendary),
          ultrarare: parseInt(ultrarare),
          rare: parseInt(rare),
        },
        rewards,
      };
    })
    .catch((error) => error);

module.exports = {
  getPlayers,
  getRewards,
};
