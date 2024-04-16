const express = require("express");
const {  getAllUser } = require("../controllers/userController");
const { getAllTagsAndTasks, getTagAndTask } = require("../controllers/TagsAndTaskController");

const router = express.Router();

router.get("", getAllTagsAndTasks);
router.get("/:id", getTagAndTask);

module.exports = router;
