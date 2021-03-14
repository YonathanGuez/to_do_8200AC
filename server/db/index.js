const { Pool } = require('pg');

const USER = process.env.PGUSER || 'postgres';
const DATABASE = process.env.PGDATABASE || 'todo';
const PASSWORD = process.env.PGPASSWORD || 'postgres';
const HOST = process.env.PGHOST || 'postgres';
const PORT = process.env.PGPORT || 5432;

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  user: USER,
  database: DATABASE,
  password: PASSWORD,
  host: HOST,
  port: PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
