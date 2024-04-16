const express = require("express");
const { taskSubmit, getTask, getTaskByEmail } = require("../controllers/tasksSubmissionController");

const router = express.Router();

// router.get("", getAllTagsAndTasks);
router.post("/submit", taskSubmit);
router.get("/task/:id", getTask);
router.get("/:email", getTaskByEmail); 


module.exports = router;
