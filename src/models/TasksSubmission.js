const mongoose = require("mongoose");
const TasksSubmissionDetails = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
    },
    tag: {
      type: String,
      unique: true,
    },
    task: {
      type: String,
      unique: true,
    },
    uniqueCode: { type: Number, required: false, default: 1 }
  }
);

const TasksSubmission = mongoose.model("TasksSubmission", TasksSubmissionDetails);

module.exports = TasksSubmission;
