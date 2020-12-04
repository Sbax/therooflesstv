const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const spreadsheetId = process.env.DATA_SHEET;
const googleKey = process.env.GOOGLE_SHEETS_API_KEY;

const getSheet = (range) => {
  const sheets = google.sheets({
    version: 'v4',
    auth: googleKey,
  });

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId,
        range,
      },
      (error, res) => {
        if (error) {
          reject({ error: `The API returned an error: ${error}` });
          return;
        }

        const rows = res.data.values;
        resolve(rows);
      }
    );
  });
};

const toKebabCase = (string) =>
  string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

const getTrainers = () =>
  getSheet('Trainers!A2:M')
    .then(
      (response) =>
        (response || []).reduce(
          (
            { trainers },
            [
              name,
              mon1number,
              mon1name,
              mon2number,
              mon2name,
              mon3number,
              mon3name,
              mon4number,
              mon4name,
              mon5number,
              mon5name,
              mon6number,
              mon6name,
            ]
          ) => ({
            trainers: [
              ...trainers,
              {
                name,
                slug: toKebabCase(name),
                team: [
                  { number: mon1number, name: mon1name },
                  { number: mon2number, name: mon2name },
                  { number: mon3number, name: mon3name },
                  { number: mon4number, name: mon4name },
                  { number: mon5number, name: mon5name },
                  { number: mon6number, name: mon6name },
                ].filter(({ number }) => !!number),
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
  getSheet('Database!A2:K')
    .then(
      (response) =>
        (response || []).reduce(
          (
            { mons },
            [
              sprite,
              sprite_url,
              generation,
              id_nb,
              name,
              type_1,
              type_2,
              slug,
              catch_rate_base255,
            ]
          ) => ({
            mons: [
              ...mons,
              {
                sprite: sprite_url,
                generation,
                number: id_nb,
                name,
                types: [type_1, type_2].filter(Boolean),
                catchRate: parseInt(catch_rate_base255),
                slug,
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
  SCOPES,
  getMons,
  getTrainers,
};
