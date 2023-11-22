require('dotenv').config();
const connection = require('./database/connection');

const DATABASE = process.env.MYSQL_DATABASE;

async function getAllReports() {
    const query = `SELECT * FROM ${DATABASE}.reports`;
    const result = await connection.execute(query);
    return result[0];
}

async function insertUser(userData) {
    if(userData.full_name) {
        const columns = Object.keys(userData).join(', ');
        // eslint-disable-next-line no-unused-vars
        const placeholders = Object.values(userData).map((value) => '?').join(', ');
        const values = Object.values(userData);
        const query = `INSERT INTO ${DATABASE}.users (${columns}) VALUES (${placeholders})`;
        const result = await connection.execute(query, values);
        const idUser = result[0].insertId;
        return idUser;
    }
    return 1;
}

async function insertReport(reportData) {
    const columns = Object.keys(reportData).join(', ');
    // eslint-disable-next-line no-unused-vars
    const placeholders = Object.values(reportData).map((value) => '?').join(', ');
    const values = Object.values(reportData);
    const query = `INSERT INTO ${DATABASE}.reports (${columns}) VALUES (${placeholders})`;
    const result = await connection.execute(query, values);
    const idReport = result[0].insertId;
    return idReport;
}

module.exports = {
    getAllReports,
    insertUser,
    insertReport
};
