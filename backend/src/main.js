const express = require('express');
const router = require('./routes/router');

const api = express();

api.use(express.json());
api.use(router);

module.exports = api;