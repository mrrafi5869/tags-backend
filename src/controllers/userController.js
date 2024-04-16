const User = require("../models/User");

require("dotenv").config();

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({
      message: "User get successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      message: "User get successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginWithEmail = async (req, res) => {
  console.log(req.body);
  const { name, email, uniqueCode } = req.body;
  try {
    const user = {
      displayName: name, 
      email,
      uniqueCode
    }
    const loginUser = await User.create(user);
    res.status(201).json(loginUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  loginWithEmail,
  getAllUser,
};
