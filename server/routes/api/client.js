const express = require('express');
const router = express.Router();
const {
  createTask,
  setTask,
  getAllTasks,
  getTask,
  deleteTask,
} = require('../../repo/todo');

/**
 * Create Task
 * @param task
 */
router.post('/:task', async (req, res) => {
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

/**
 * Get All Tasks
 */
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

/**
 * Get Task
 * @param id
 */

router.get('/:id', async (req, res) => {
  const { id } = req.query;
  try {
    const result = await getTask();
    if (result.rowCount == 1) {
      res.status(201).send({
        status: 'success',
        message: 'get Task',
      });
    }
  } catch (error) {
    res.status(401).send({
      status: 'fail',
      message: 'fail get task',
    });
    console.log(error);
  }
});

/**
 * Update Task
 * @param id
 */
router.put('/:id', async (req, res) => {
  const { id } = req.query;
  try {
    const result = await setTask(id, status);
    if (result.rowCount == 1) {
      res.status(201).send({
        status: 'success',
        message: 'task updated',
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

/**
 * DELETE Task
 * @param id
 */

router.post('/:id', async (req, res) => {
  const { id } = req.query;
  try {
    const result = await deleteTask(id);
    if (result.rowCount == 1) {
      res.status(201).send({
        status: 'success',
        message: 'task deleted',
      });
    }
  } catch (error) {
    res.status(401).send({
      status: 'fail',
      message: 'this task not be deleted',
    });
    console.log(error);
  }
});
module.exports = router;
