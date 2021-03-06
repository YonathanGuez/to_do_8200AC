const db = require('../db');

exports.createTask = function (task) {
  const values = [task];
  const query = `
  INSERT INTO "todo"(task, status, createdat, updateat) 
  VALUES (($1::text), FALSE, Now(), NULL)  RETURNING id;
    `;
  return db.query({
    name: 'createTask',
    text: query,
    values: values,
  });
};

exports.getAllTasks = function () {
  const query = `SELECT id, task, status FROM "todo";`;
  return db.query({
    name: 'getAllTasks',
    text: query,
  });
};

exports.getTask = function (id) {
  const values = [id];
  const query = `SELECT id, task, status, createdAt, updateAt FROM "todo" WHERE id=$1::int;`;
  return db.query({
    name: 'getTask',
    text: query,
    values: values,
  });
};

exports.setTask = function (status, id) {
  const values = [status, id];
  const query = `UPDATE "todo" set status=$1 , updateAt=Now()  where id =$2::int;`;
  return db.query({
    name: 'setTask',
    text: query,
    values: values,
  });
};

exports.deleteTask = function (id) {
  const values = [id];
  const query = `DELETE FROM "todo" WHERE id=$1::int;`;

  return db.query({
    name: 'deleteTask',
    text: query,
    values: values,
  });
};
