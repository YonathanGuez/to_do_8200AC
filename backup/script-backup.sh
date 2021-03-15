#!/bin/sh
echo "Backup From PostgreSQL to Mongodb  - $(date)"
echo "You can schedule any thing you want here"
node export-csv.js
node import-csv-mongo.js
echo "Export CSV to Mongodb Done!!"
