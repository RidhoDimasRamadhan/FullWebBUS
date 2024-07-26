const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// const dotenv = require("dotenv");
const path = require("path");
// const cv = require("opencv4nodejs");

const multer = require("multer");
// const fs = require("fs");

// user db
const dataLogin = require("./models/db1");

// gallery db
const Photo = require("./models/db_images");

//  armada db
const Armada_db = require("./models/armada");

// pesanan
const Pesanan = require("./models/pesanan");

mongoose.connect("mongodb://localhost:27017/Skripsi");

const UserBcrypt = bcrypt.genSaltSync(10);
const secret = "sfsdfs31313hsdsjdsdj121";

const app = express();

// Middleware
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// app.use(express.json());
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
    limit: "50mb",
  })
);

app.use(express.static("uploads"));

app.use(bodyParser.json({ limit: "100000mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(bodyParser.json({ limit: "50mb" }));

// Registrasi User
app.post("/registrasi", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const User = await dataLogin.create({
      username,
      email,
      password: bcrypt.hashSync(password, UserBcrypt),
    });
    res.json(User);
  } catch (e) {
    res.status(422).json(e);
  }
});

// login User and Admin
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await dataLogin.findOne({ email });
    if (User) {
      const pass = bcrypt.compareSync(password, User.password);
      if (pass) {
        jwt.sign(
          { email: User.email, id: User._id },
          secret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(User).send("berhasil login");
          }
        );
      } else {
        res.send("password salah");
      }
    } else {
      res.send("email tidak ditemukan");
    }
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/loginAdmin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await dataLogin.findOne({ email });
    if (User) {
      const pass = bcrypt.compareSync(password, User.password);
      if (pass) {
        jwt.sign(
          { email: User.email, id: User._id },
          secret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(User).send("berhasil login");
          }
        );
      } else {
        res.send("password salah");
      }
    } else {
      res.send("email tidak ditemukan");
    }
  } catch (e) {
    res.status(422).json(e);
  }
});

// const verifyToken = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) return res.status(401).send("Access Denied");

//   try {
//     const verified = jwt.verify(token, secret);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid Token");
//   }
// };

function getUserDataFromUser(req) {
  const { token } = req.cookies;

  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.get("/bookings", async (req, res) => {
  const userData = await getUserDataFromUser(req);
  res.json(
    await Pesanan.find({ user_id: userData.id })
      .populate("armada_id")
      .populate("user_id")
  );
});

// Halaman Pesan User
app.post("/pesan_bus", async (req, res) => {
  const userData = await getUserDataFromUser(req);
  const {
    armada_id,
    // user_id,
    nomor_telepon,
    tanggal_berangkat,
    tanggal_pulang,
  } = req.body;
  Pesanan.create({
    // userId,
    armada_id,
    user_id: userData.id,
    nomor_telepon,
    tanggal_berangkat,
    tanggal_pulang,
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// CONTEX USER
app.get("/", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, secret, {}, async (err, userData) => {
      if (err) throw err;
      const { id, email, username } = await dataLogin.findById(userData.id);
      res.json({ id, email, username });
    });
  } else {
    res.json(null);
  }

  // HALAMAN USER

  // get image galeri page
  app.get("/images", (req, res) => {
    Photo.find({}).then((result) => res.send(result));
  });

  // get armada, armada page
  app.get("/armada", (req, res) => {
    Armada_db.find({}).then((result) => res.send(result));
  });

  // get id halaman Armada
  app.get("/detail_armada/:id", (req, res) => {
    const id = req.params.id;
    Armada_db.findById({ _id: id })
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });

  //   res.send("ini halaman utama");
});
// app.get("/admin", (req, res) => {
//   const { token } = req.cookies;
//   if (token) {
//     jwt.verify(token, secret, {}, async (err, userData) => {
//       if (err) throw err;
//       const { id, email, username } = await dataLogin.findById(userData.id);
//       res.json({ id, email, username });
//     });
//   } else {
//     res.json(null);
//   }
//   //   res.send("ini halaman utama");
// });

// ADMIN
app.get("/halamanAdmin", (req, res) => {
  dataLogin
    .find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("berhasil logout");
});

// Upload Image to Gallery Image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  Photo.create({
    Photo: req.file.filename,
  });
  console.log(req.file);
});

// delete image ADMIN
app.delete("/deleteImage/:id", (req, res) => {
  const id = req.params.id;
  Photo.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// admin Armada

// app.post("/post_armada", (req, res) => {
// const {
//   nama_bis,
//   gambar_bis,
//   tempat_duduk,
//   bahan_bakar,
//   wifi_youtube,
//   selimut_bantal,
//   ac,
//   karaoke,
// } = req.body;
//   Armada_db.create({
//     nama_bis: req.body.nama_bis,
//     gambar_bis: base64.gambar_bis,
//     tempat_duduk: req.body.tempat_duduk,
//     bahan_bakar: req.body.bahan_bakar,
//     wifi_youtube: req.body.wifi_youtube,
//     selimut_bantal: req.body.selimut_bantal,
//     ac: req.body.ac,
//     karaoke: req.body.karaoke,
//   })
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
//   console.log(req.file);
// });

app.post("/post_armada", (req, res) => {
  Armada_db.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get_armada", (req, res) => {
  Armada_db.find({})
    .then((result) => res.send(result))
    .catch((err) => res.json(err));
});

app.delete("/delete_armada/:id", (req, res) => {
  const id = req.params.id;
  Armada_db.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/update_armada/:id", (req, res) => {
  const id = req.params.id;
  Armada_db.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/update_armada_admin/:id", (req, res) => {
  const id = req.params.id;
  Armada_db.findByIdAndUpdate(
    { _id: id },
    {
      nama_bis: req.body.nama_bis,
      gambar_bis: req.body.gambar_bis,
      tempat_duduk: req.body.tempat_duduk,
      bahan_bakar: req.body.bahan_bakar,
      wifi_youtube: req.body.wifi_youtube,
      selimut_bantal: req.body.selimut_bantal,
      ac: req.body.ac,
      karaoke: req.body.karaoke,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Order
app.put("/update_armada_admin/:id", (req, res) => {
  const id = req.params.id;
  Armada_db.findByIdAndUpdate(
    { _id: id },
    {
      nama_bis: req.body.nama_bis,
      gambar_bis: req.body.gambar_bis,
      tempat_duduk: req.body.tempat_duduk,
      bahan_bakar: req.body.bahan_bakar,
      wifi_youtube: req.body.wifi_youtube,
      selimut_bantal: req.body.selimut_bantal,
      ac: req.body.ac,
      karaoke: req.body.karaoke,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.listen(2000, () => {
  console.log("Server running on port 2000");
});
