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

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const loginWithEmail = async (req, res) => {
  console.log(req.body);
  const { name, email, phone, password } = req.body;
  try {
    const user = {
      
      name, 
      email,
      password,
      phone
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json(user);
    }

    // Check if password matches
    if (existingUser && existingUser.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
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
  getUserByEmail,
  getAllUser,
};
