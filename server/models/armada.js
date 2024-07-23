const mongoose = require("mongoose");

const userScheemaa = new mongoose.Schema({
  nama_bis: String,
  gambar_bis: String,
  tempat_duduk: Number,
  bahan_bakar: String,
  wifi_youtube: String,
  selimut_bantal: String,
  ac: String,
  karaoke: String,
});

const armada_admin = mongoose.model("armada", userScheemaa);

module.exports = armada_admin;
