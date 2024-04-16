const TagsAndTask = require("../models/TagAndTask");
const User = require("../models/User");

require("dotenv").config();

const getTagAndTask = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await TagsAndTask.findById(id);
    res.status(200).json({
      message: "User get successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTagsAndTasks = async (req, res) => {
  try {
    const user = await TagsAndTask.find();
    res.status(200).json({
      message: "User get successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTagAndTask,
  getAllTagsAndTasks,
};
