const fs = require('fs');
const mongodb = require('mongodb').MongoClient;

const fastcsv = require('fast-csv');

let url = 'mongodb://mongo:27017/';

let stream = fs.createReadStream('todolist.csv');
let csvData = [];
// // Create a new MongoClient
// const client = new mongodb(url, { useUnifiedTopology: true });
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db('todo').command({ ping: 1 });
//     console.log('Connected successfully to server');
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

let csvStream = fastcsv
  .parse()
  .on('data', function (data) {
    csvData.push({
      id: data[0],
      name: data[1],
      description: data[2],
      createdAt: data[3],
    });
  })
  .on('end', function () {
    // remove the first line: header
    csvData.shift();

    console.log(csvData);

    mongodb.connect(url, { useUnifiedTopology: true }, (err, client) => {
      if (err) throw err;

      client
        .db('todo')
        .collection('category')
        .insertMany(csvData, (err, res) => {
          if (err) throw err;

          console.log(`Inserted: ${res.insertedCount} rows`);
          client.close();
        });
    });
  });

stream.pipe(csvStream);
