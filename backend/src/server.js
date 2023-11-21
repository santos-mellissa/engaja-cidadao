require('dotenv').config();
const api = require('./main');
const colors = require('./utils/colors');
const connection = require('./model/database/connection');

const PORT = process.env.API_SERVER_PORT;

api.listen(PORT, async () => {
    console.info(`\nBackend server running on port ${colors.green}${PORT}${colors.reset}!`);

    try {
        const result = await connection.execute('SELECT 1');
        if(result[0]){
            console.info('➜  MySQL: connection OK\n');
        }
    } catch(error) {
        console.error(`➜  MySQL: ${colors.red}unable to connect. ${error.code}${colors.reset}\n`);
    }
});