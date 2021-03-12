const Pool = require('pg').Pool;
const fastcsv = require('fast-csv');
const fs = require('fs');
const ws = fs.createWriteStream('todolist.csv');

// Create a connection to the database
const pool = new Pool({
  user: 'postgres', //env var: PGUSER
  database: 'todo', //env var: PGDATABASE
  password: 'postgres', //env var: PGPASSWORD
  host: 'postgres', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
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
