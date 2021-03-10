const express = require('express');
const router = express.Router();
const { createTask, setTask, getAllTasks } = require('../../repo/todo');

router.post('/', async (req, res) => {
  const { task } = req.query;
  try {
    const result = await createTask(task);
    if (result.rowCount == 1) {
      res.status(201).send({
        status: 'success',
        message: 'task created',
      });
    }
  } catch (error) {
    res.status(401).send({
      status: 'fail',
      message: 'this task not crated',
    });
    console.log(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await getAllTasks();
    if (result.rowCount == 1) {
      res.status(201).send({
        status: 'success',
        message: 'all Tasks',
      });
    }
  } catch (error) {
    res.status(401).send({
      status: 'fail',
      message: 'fail get all tasks',
    });
    console.log(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await getAllTasks();
    if (result.rowCount == 1) {
      res.status(201).send({
        status: 'success',
        message: 'all Tasks',
      });
    }
  } catch (error) {
    res.status(401).send({
      status: 'fail',
      message: 'fail get all tasks',
    });
    console.log(error);
  }
});
router.post('/', async (req, res) => {
  const { id } = req.query;
  try {
    const result = await setTask(id, status);
    if (result.rowCount == 1) {
      res.status(201).send({
        status: 'success',
        message: 'task update',
      });
    }
  } catch (error) {
    res.status(401).send({
      status: 'fail',
      message: 'fail to update task ',
    });
    console.log(error);
  }
});

module.exports = router;
