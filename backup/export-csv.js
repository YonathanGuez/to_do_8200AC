const Pool = require('pg').Pool;
const fastcsv = require('fast-csv');
const fs = require('fs');
const ws = fs.createWriteStream('todolist.csv');

const USER = process.env.PGUSER || 'postgres';
const DATABASE = process.env.PGDATABASE || 'todo';
const PASSWORD = process.env.PGPASSWORD || 'postgres';
const HOST = process.env.PGHOST || 'postgres';
const PORT = process.env.PGPORT || 5432;

// Create a connection to the database
const pool = new Pool({
  user: USER,
  database: DATABASE,
  password: PASSWORD,
  host: HOST,
  port: PORT,
});

// open the PostgreSQL connection
pool.connect((err, client, done) => {
  if (err) throw err;

  client.query('SELECT * FROM todo', (err, res) => {
    done();

    if (err) {
      console.log(err.stack);
    } else {
      const jsonData = JSON.parse(JSON.stringify(res.rows));
      console.log('jsonData', jsonData);

      fastcsv
        .write(jsonData, { headers: true })
        .on('finish', function () {
          console.log('Write todolist.csv successfully!');
        })
        .pipe(ws);
    }
  });
});
