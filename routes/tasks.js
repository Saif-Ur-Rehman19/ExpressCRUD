const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require("../controllers/tasks");


// Traditional way
//router.get('/', getAllTasks);
//router.post('/', createTask);

// Short Way
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
// /:id is param 

module.exports = router;
