const model = require('../model/reports.model');

async function getAllReports(req, res) {
    const result = await model.getAllReports();
    res.status(200).json(result);
}

module.exports = {
    getAllReports
};
