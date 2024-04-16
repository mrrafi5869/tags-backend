const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    uniqueCode: { type: Number, required: false }
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
