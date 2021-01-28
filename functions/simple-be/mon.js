const sheets = require('./sheets');
const { getSheet } = sheets;

const utils = require('./utils');
const { toKebabCase } = utils;

const monSpreadsheet = process.env.MON_SHEET;

const getTrainers = () =>
  getSheet(monSpreadsheet, 'Trainers!A2:IX')
    .then(
      (response) =>
        (response || []).reduce(
          ({ trainers }, [number, name, ...team]) => ({
            trainers: [
              ...trainers,
              {
                number,
                name,
                slug: toKebabCase(name),
                team: team.filter((name) => !!name),
              },
            ],
          }),
          {
            trainers: [],
          }
        ).trainers
    )
    .catch((error) => error);

const getMons = () =>
  getSheet(monSpreadsheet, 'Database!A2:M')
    .then(
      (response) =>
        (response || []).reduce(
          (
            { mons },
            [
              _,
              sprite_url,
              generation,
              id_nb,
              name,
              type_1,
              type_2,
              slug,
              catch_rate_base255,
              is_legendary,
              cry,
              dex,
              rarity,
            ]
          ) => ({
            mons: [
              ...mons,
              {
                sprite: sprite_url,
                generation: parseInt(generation),
                number: id_nb,
                name,
                types: [type_1, type_2]
                  .filter(Boolean)
                  .map((string) => string.toLowerCase()),
                catchRate: parseInt(catch_rate_base255),
                slug,
                legendary: is_legendary === 'TRUE',
                cry,
                dex,
                rarity: parseInt(rarity),
              },
            ],
          }),
          {
            mons: [],
          }
        ).mons
    )
    .catch((error) => error);

module.exports = {
  getTrainers,
  getMons,
};
