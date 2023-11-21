require('dotenv').config();
const mySQL = require('mysql2/promise');

const connection = mySQL.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE
});

module.exports = connection;