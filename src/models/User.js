const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
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
