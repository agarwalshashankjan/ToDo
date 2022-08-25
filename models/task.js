const mongoose = require("mongoose");

const TaskScema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskScema);

module.exports = Task;
