const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const sheets = require('./sheets');
const { getMons, getTrainers } = sheets;
const router = express.Router();

router.get('/mons', async (_, res) => {
  const items = await getMons();

  if (items.error) {
    res.status(500);
    res.json({ error: items.error });

    return;
  }

  res.json(items);
});

router.get('/trainers', async (_, res) => {
  const items = await getTrainers();

  if (items.error) {
    res.status(500);
    res.json({ error: items.error });

    return;
  }

  res.json(items);
});

app.use(bodyParser.json());
app.use('/.netlify/functions/simple-be', router);
app.use('/', (_, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
