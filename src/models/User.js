const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, optional: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      optional: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    uniqueCode: { type: Number, optional: true },
    tagsShow: { type: Boolean, default: true }
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
