const express = require("express");
const { taskSubmit, getTask } = require("../controllers/tasksSubmissionController");

const router = express.Router();

// router.get("", getAllTagsAndTasks);
router.post("/submit", taskSubmit);
router.get("/task", getTask);

module.exports = router;
