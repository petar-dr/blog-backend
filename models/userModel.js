const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Username is require"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is require"],
  },
});

const User = mongoose.model("User", userShema);

module.exports = User;
