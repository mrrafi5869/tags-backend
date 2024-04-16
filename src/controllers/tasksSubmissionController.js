const TagsAndTask = require("../models/TagAndTask");
const User = require("../models/User");

require("dotenv").config();

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await TasksSubmission.findById(id);
    res.status(200).json({
      message: "Tag And Task get successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const taskSubmit = async (req, res) => {
  const { name, email, tag, task } = req.body;
  try {
    const taskDetails = await TasksSubmission.create({
      name,
      email,
      tag,
      task,
    });
    res.status(201).json(taskDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTask,
  taskSubmit,
};
