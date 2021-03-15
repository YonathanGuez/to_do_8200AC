#FROM alpine:3.12
FROM node:12.16.1-alpine3.9 as build
# install and config cron 
RUN apk update && apk add dos2unix
COPY script-backup.sh /bin/script-backup.sh
RUN dos2unix -n /bin/script-backup.sh /bin/script-backup.sh
COPY root /var/spool/cron/crontabs/root
RUN dos2unix -n /var/spool/cron/crontabs/root /var/spool/cron/crontabs/root
RUN chmod +x /bin/script-backup.sh

# install package nodejs 
COPY package.json yarn.lock ./root/
COPY export-csv.js import-csv-mongo.js ./root/
RUN cd /root &&  yarn install

# run the cron 
CMD crond -l 2 -f
