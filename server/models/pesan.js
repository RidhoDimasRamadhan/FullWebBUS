const mongoose = require("mongoose");

const userScheemaa = new mongoose.Schema({
  //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "userdata" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "userdata" },
  nama_lengkap: String,
  email: String,
  kategori: String,
  no_telepon: String,
  pesan: String,
  dibaca: {
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
const pesanan = mongoose.model("pesan", userScheemaa);

module.exports = pesanan;
