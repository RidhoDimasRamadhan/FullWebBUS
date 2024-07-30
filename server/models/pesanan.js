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
  tanggal_pesan: {
    type: String,
    default: () => {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
  },
});
const pesanan = mongoose.model("pesanan", userScheemaa);

module.exports = pesanan;
