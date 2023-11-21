require('dotenv').config();
const connection = require('./database/connection');

const DATABASE = process.env.MYSQL_DATABASE;

async function getAllReports() {
    const query = `SELECT * FROM ${DATABASE}.reports`;
    const result = await connection.execute(query);
    return result[0];
}

module.exports = {
    getAllReports
};
