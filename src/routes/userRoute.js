const express = require("express");
const { getUser, getAllUser, loginWithEmail, getUserByEmail, updateUserTagsShow } = require("../controllers/userController");

const router = express.Router();

router.get("", getAllUser);
router.post("/email-login", loginWithEmail);
router.get("/:email", getUserByEmail); 
router.get("/:id", getUser); 
router.put("/:id", updateUserTagsShow); 

module.exports = router;
