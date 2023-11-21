const api = require('./main');
const colors = require('./utils/colors');

const PORT = 3001;

api.listen(PORT, () => console.log(`\nBackend server running on port ${colors.green}${PORT}${colors.reset}!`));