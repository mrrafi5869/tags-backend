const TagsAndTask = require("../models/TagAndTask");
const TasksSubmission = require("../models/TasksSubmission");

require("dotenv").config();

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await TagsAndTask.find();
    
    let foundTask = null;
    tasks.forEach(task => {
      task.tags.forEach(tag => {
        tag.values.forEach(value => {
          if (value._id === id) {
            foundTask = {
              _id: value._id,
              taskName: value.taskName,
              taskDescription: value.taskDescription,
              image: task.image
            };
          }
        });
      });
    });

    if (!foundTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task get successfully",
      data: foundTask,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTask = async (req, res) => {
  try {
    const task = await TagsAndTask.find();
    res.status(200).json({
      message: "task get successfully",
      data: task,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTaskByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const tasks = await TasksSubmission.find({ email });
    if (tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ message: 'No tasks found for this user' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const taskSubmit = async (req, res) => {
  try {
    const { task, user, text } = req.body; 
    const taskDetails = await TasksSubmission.create({ task, name: user.name, email: user.email, text }); 
    res.status(201).json(taskDetails); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getTask,
  getAllTask,
  taskSubmit,
  getTaskByEmail
};
