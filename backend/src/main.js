const express = require('express');
const router = require('./routes/router');
const cors = require('cors');

const api = express();

api.use(express.json());
api.use(router);
api.use(cors());

module.exports = api;