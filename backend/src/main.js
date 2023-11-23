const express = require('express');
const router = require('./routes/router');
const cors = require('cors');

const api = express();

api.use(cors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));
api.use(express.json());
api.use(router);

module.exports = api;