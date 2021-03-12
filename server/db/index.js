const { Pool } = require('pg');

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  user: 'postgres', //env var: PGUSER
  database: 'todo', //env var: PGDATABASE
  password: 'postgres', //env var: PGPASSWORD
  host: 'postgres', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
