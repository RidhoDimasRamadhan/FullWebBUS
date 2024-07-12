// const mongoose = require("mongoose");

// const userScheema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: String,
//   role: { type: String, default: "User" },
// });

// const userLogin = mongoose.model("userdata", userScheema);

// module.exports = userLogin;

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
