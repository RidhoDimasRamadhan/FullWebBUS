const mongoose = require("mongoose");

const userScheemaa = new mongoose.Schema({
  username: { type: String, unique: true },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    default: "User",
  },
});

const userLogin = mongoose.model("userdata", userScheemaa);

module.exports = userLogin;
