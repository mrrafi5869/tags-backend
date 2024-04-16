const mongoose = require("mongoose");

const TasksSubmissionSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true }, // Remove unique: true
  tag: { type: String },
  task: {
    taskName: { type: String },
    taskDescription: { type: String },
  },
  uniqueCode: { type: Number, default: 1 },
});

const TasksSubmission = mongoose.model(
  "TasksSubmission",
  TasksSubmissionSchema
);

module.exports = TasksSubmission;
