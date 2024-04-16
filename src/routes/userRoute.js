const express = require("express");
const { getUser, getAllUser, loginWithEmail } = require("../controllers/userController");

const router = express.Router();

router.post("/email-login", loginWithEmail);
router.get("/:id", getUser); 
router.get("", getAllUser);

module.exports = router;
