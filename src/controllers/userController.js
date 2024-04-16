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
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateUserTagsShow = async (req, res) => {
  try {
    const { id } = req.params;
    const { tagsShow } = req.body;
    console.log(id);
    console.log(tagsShow);
    const updatedUser = await User.findByIdAndUpdate(id, { tagsShow }, { new: true });

    if (updatedUser) {
      res.status(200).json({
        message: "User tagsShow updated successfully",
        data: updatedUser,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const loginWithEmail = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const user = {
      name,
      email,
      password,
      phone,
    };
    const existingUser = await User.findOne({ email });
    
    // Check if password matches
    if (existingUser && existingUser.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    
    if (existingUser) {
      if(existingUser.tagsShow === true) {
        return res.status(200).json(user);
      }else{
        return res.status(201).json(user);
      }
      
    }else{
      return res.status(404).json({message: "User not found"})
    }

    // const loginUser = await User.create(user);
    // console.log(loginUser);
    // res.status(201).json(loginUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  loginWithEmail,
  getUserByEmail,
  updateUserTagsShow,
  getAllUser,
};
