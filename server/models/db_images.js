const mongoose = require("mongoose");

const userScheemaa = new mongoose.Schema({
  Photo: String,
});

const images_page = mongoose.model("images", userScheemaa);

module.exports = images_page;
