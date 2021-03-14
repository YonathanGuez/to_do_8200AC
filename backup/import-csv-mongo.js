const fs = require('fs');
const mongodb = require('mongodb').MongoClient;
const fastcsv = require('fast-csv');

let url = 'mongodb://root:rootpwd@mongodb:27017/';
let stream = fs.createReadStream('todolist.csv');
let csvData = [];
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

    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db('todo')
          .collection('category')
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });

stream.pipe(csvStream);
