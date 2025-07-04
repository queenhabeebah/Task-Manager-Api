const express = require("express");
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router()

router.route('/')
.get(getTasks)
.post(createTask)

router.route('/:id')
.get(getTask)
.put(updateTask)
.delete(deleteTask)

module.exports = router
