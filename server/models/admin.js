const mongoose = require("mongoose");

const userScheemaa = new mongoose.Schema({
  username: { type: String, unique: true },
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const adminLogin = mongoose.model("admin", userScheemaa);

module.exports = adminLogin;
