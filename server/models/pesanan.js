const mongoose = require("mongoose");

const userScheemaa = new mongoose.Schema({
  //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "userdata" },
  armada_id: { type: mongoose.Schema.Types.ObjectId, ref: "armada" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userdata" },
  nomor_telepon: Number,
  tanggal_berangkat: String,
  tanggal_pulang: String,
  order: {
    type: String,
    default: "false",
  },
});
const pesanan = mongoose.model("pesanan", userScheemaa);

module.exports = pesanan;
