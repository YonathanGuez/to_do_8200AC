#!/bin/bash
// Run psql
docker exec -it mydb psql -U postgres -d your_database

// import CSV
\copy anime FROM '/var/lib/postgresql/data/AnimeList.csv' DELIMITER ',' CSV HEADER;
