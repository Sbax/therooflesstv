const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const googleKey = process.env.GOOGLE_SHEETS_API_KEY;

const getSheet = (sheet, range) => {
  const sheets = google.sheets({
    version: 'v4',
    auth: googleKey,
  });

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: sheet,
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

module.exports = {
  SCOPES,
  getSheet,
};
