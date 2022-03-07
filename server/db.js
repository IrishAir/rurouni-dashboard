const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: '5746',
  host: 'localhost',
  port: '5432',
  database: 'training'
});

module.exports = pool;