const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");

const dataLogin = require("./models/db1");
mongoose.connect("mongodb://localhost:27017/Skripsi");

const UserBcrypt = bcrypt.genSaltSync(10);
const secret = "sfsdfs31313hsdsjdsdj121";

const app = express();
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

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

// login
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
  //   res.send("ini halaman utama");
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("berhasil logout");
});

app.listen(2000, () => {
  console.log("Server running on port 2000");
});
