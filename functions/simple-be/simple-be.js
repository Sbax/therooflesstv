const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const { addRoute } = require('./utils');

const router = express.Router();

const mon = require('./mon');
const { getMons, getTrainers } = mon;

const ennara = require('./ennara');
const { getPlayers, getRewards } = ennara;

addRoute(router, '/mons', getMons);
addRoute(router, '/trainers', getTrainers);

addRoute(router, '/players', getPlayers);
addRoute(router, '/rewards', getRewards);

app.use(bodyParser.json());
app.use('/.netlify/functions/simple-be', router);
app.use('/', (_, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
