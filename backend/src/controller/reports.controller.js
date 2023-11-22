const model = require('../model/reports.model');

async function getAllReports(req, res) {
    const result = await model.getAllReports();
    res.status(200).json(result);
}

async function insertReport(req, res) {
    const user = req.body.user;
    const insertedUserId = await model.insertUser(user);

    const report = req.body.report;
    report['user_id'] = insertedUserId;
    const insertReportId = await model.insertReport(report);
    res.status(201).json({insertedUserId, insertReportId});
}

module.exports = {
    getAllReports,
    insertReport
};
