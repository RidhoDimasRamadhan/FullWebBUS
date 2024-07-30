import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Select from "react-select";

import { Link } from "react-router-dom";

// import Calendar from "react-calendar";
const Create = () => {
  const { id } = useParams();

  const [nama_bis, setnama_bis] = useState();
  const [gambar_bis, setgambar_bis] = useState({ gambar_bis: "" });
  const [tempat_duduk, settempat_duduk] = useState();
  const [bahan_bakar, setbahan_bakar] = useState();
  const [wifi_youtube, setwifi_youtube] = useState();
  const [selimut_bantal, setselimut_bantal] = useState();
  const [ac, setac] = useState();
  const [karaoke, setkaraoke] = useState();

  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/update_armada/" + id)
      .then((result) => {
        console.log(result);
        setnama_bis(result.data.nama_bis);
        setgambar_bis(result.data.gambar_bis);
        settempat_duduk(result.data.tempat_duduk);
        setbahan_bakar(result.data.bahan_bakar);
        setwifi_youtube(result.data.wifi_youtube);
        setselimut_bantal(result.data.selimut_bantal);
        setac(result.data.ac);
        setkaraoke(result.data.karaoke);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function wifi(e) {
    setwifi_youtube(e.target.value);
  }
  function selimutl(e) {
    setselimut_bantal(e.target.value);
  }
  function ace(e) {
    setac(e.target.value);
  }
  function karoke(e) {
    setkaraoke(e.target.value);
  }

  const handleFileChange = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      console.log(reader.result);
      setgambar_bis(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  // const Submit = (e) => {
  //   setgambar_bis(gambar_bis);
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:2000/post_armada", {
  //       nama_bis,
  //       gambar_bis,
  //       tempat_duduk,
  //       bahan_bakar,
  //       wifi_youtube,
  //       selimut_bantal,
  //       ac,
  //       karaoke,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       alert("Data Tersimpan");
  //       Navigate("/admin/armada");
  //     })
  //     .catch((err) => console.log(err));
  // };

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:2000/update_armada_admin/" + id, {
        nama_bis,
        gambar_bis,
        tempat_duduk,
        bahan_bakar,
        wifi_youtube,
        selimut_bantal,
        ac,
        karaoke,
      })
      .then((result) => {
        console.log(result);
        alert("Data Berhasil Terupdate");
        Navigate("/admin/armada");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <form onSubmit={Update} className="ms-5 me-5 mt-5">
          <h2>Edit Armada</h2>
          <div className="mb-3">
            <label className="form-label">Nama Bis</label>
            <input
              type="text"
              placeholder="Masukkan nama Bis disini"
              className="form-control"
              value={nama_bis}
              onChange={(e) => setnama_bis(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gambar Bis</label>
            <br />
            <input
              type="file"
              //   onChange={(e) => setgambar_bis(e.target.value)}
              //   onChange={(e) => handleFileChange(e)}
              onChange={handleFileChange}
              accept="image/*"
              // value={value}
            />
            {/* <input
              type="file"
              onChange={(e) => setgambar_bis(e.target.files[0])}
              // value={value}
            /> */}
            {gambar_bis && (
              <img
                src={gambar_bis}
                alt="Uploaded"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Tempat Duduk</label>
            <input
              type="number"
              placeholder="Masukkan tempat duduk disini"
              className="form-control"
              value={tempat_duduk}
              onChange={(e) => settempat_duduk(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Bahan Bakar</label>
            <input
              type="text"
              placeholder="Masukkan Jenis Bahan Bakar"
              className="form-control"
              value={bahan_bakar}
              onChange={(e) => setbahan_bakar(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Wifi & Youtube</label>
            <select
              className="form-control"
              onChange={wifi}
              value={wifi_youtube}
            >
              <option value="">Selet Option</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Selimut & Bantal</label>
            <select
              className="form-control"
              onChange={selimutl}
              value={selimut_bantal}
            >
              <option value="">Selet Option</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">AC</label>
            <select className="form-control" onChange={ace} value={ac}>
              <option value="">Selet Option</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Karoke</label>
            <select className="form-control" onChange={karoke} value={karaoke}>
              <option value="">Selet Option</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>
          <button className="btn btn-danger me-2">
            <Link
              to={"/admin/armada"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Cancel
            </Link>
          </button>
          <button className="btn btn-success"> Submit</button>
        </form>
      </div>
    </>
  );
};

export default Create;
