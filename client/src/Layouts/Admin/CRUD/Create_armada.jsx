import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Select from "react-select";

import { Link } from "react-router-dom";

// import Calendar from "react-calendar";
const Create = () => {
  const [nama_bis, setnama_bis] = useState();
  const [gambar_bis, setgambar_bis] = useState({ gambar_bis: "" });
  const [tempat_duduk, settempat_duduk] = useState();
  const [bahan_bakar, setbahan_bakar] = useState();
  const [wifi_youtube, setwifi_youtube] = useState();
  const [selimut_bantal, setselimut_bantal] = useState();
  const [ac, setac] = useState();
  const [karaoke, setkaraoke] = useState();

  const Navigate = useNavigate();

  //   const [post, setPostImage] = useState({ gambar_bis : ""});
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

//   function handleFileChange(file) {
//     return new Promise((resolve, reject) => {
//       const FileReader = window.FileReader;
//       FileReader.readAsDataURL(file);
//       FileReader.onload = () => {
//         resolve(FileReader.result);
//       };
//       FileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   }
//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertTObase64(file);
//     setgambar_bis({ ...gambar_bis, gambar_bis: base64 });
//     console.log(file);
//   };

  //   const [file, setFile] = useState(null);
  const Submit = (e) => {
    // setGaji_pokok(gajii);
    setgambar_bis(gambar_bis);
    // alert(gambar_bis);

    e.preventDefault();
    axios
      .post(
        "http://localhost:2000/post_armada",
        {
          nama_bis,
          gambar_bis,
          tempat_duduk,
          bahan_bakar,
          wifi_youtube,
          selimut_bantal,
          ac,
          karaoke,
        }
      )
      .then((result) => {
        console.log(result);
        alert("Data Tersimpan");
        Navigate("/admin/armada");
      })
      .catch((err) => console.log(err));

    // fetch("http://localhost:2000/post_armada", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     // nama_bis,
    //     gambar_bis: "<base64_encoded_image>",
    //     // tempat_duduk,
    //     // bahan_bakar,
    //     // wifi_youtube,
    //     // selimut_bantal,
    //     // ac,
    //     // karaoke,
    //   })
    //     .then((result) => {
    //       console.log(result);
    //       alert("Data Tersimpan");
    //       Navigate("/admin/armada");
    //     })
    //     .catch((err) => console.log(err)),
    // });
  };

  return (
    <>
      <div>
        <form onSubmit={Submit} className="ms-5 me-5 mt-5">
          <h2>Tambah Armada</h2>
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
              onChange={(e) => settempat_duduk(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Bahan Bakar</label>
            <input
              type="text"
              placeholder="Masukkan Jenis Bahan Bakar"
              className="form-control"
              onChange={(e) => setbahan_bakar(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Wifi & Youtube</label>
            <select className="form-control" onChange={wifi}>
              <option value="">Selet Option</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Selimut & Bantal</label>
            <select className="form-control" onChange={selimutl}>
              <option value="">Selet Option</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">AC</label>
            <select className="form-control" onChange={ace}>
              <option value="">Selet Option</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Karoke</label>
            <select className="form-control" onChange={karoke}>
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

