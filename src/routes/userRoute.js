const express = require("express");
const { getUser, getAllUser, loginWithEmail, getUserByEmail } = require("../controllers/userController");

const router = express.Router();

router.post("/email-login", loginWithEmail);
router.get("/:email", getUserByEmail); 
router.get("/:id", getUser); 
router.get("", getAllUser);

module.exports = router;
