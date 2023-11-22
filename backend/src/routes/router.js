const express = require('express');
const controller = require('../controller/reports.controller');

const router = express.Router();

router.get('/query', controller.getAllReports);
router.post('/report', controller.insertReport);

module.exports = router;
