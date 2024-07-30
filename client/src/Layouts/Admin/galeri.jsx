import React, { useEffect } from "react";
import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import "/src/css/halaman_admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
function galeri_admin() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [gambar, setGambar] = useState();

  const handle_upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios.post("http://localhost:2000/upload", formData);
    toast.success("Image uploaded successfully");
    navigate("/admin/galeri_admin");
  };

  useEffect(() => {
    axios
      .get("http://localhost:2000/images")
      .then((result) => setGambar(result.data))
      .catch((err) => console.log(err));
  }, []);

  const hapus = (id) => {
    axios
      .delete("http://localhost:2000/deleteImage/" + id)
      .then((result) => {
        console.log(result);
        navigate("/admin/pemesanan");
        toast.success("Image deleted successfully");
        // navigate("/admin/galeri_admin");
        // navigate("/admin/galeri_admin");

        // window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };
  return (
    <>
      <div className="d-flex">
        <div>
          <Halaman_utama />
        </div>

        <div className="w-100 galeri">
          <h1 className="text-center mt-3">UPLOAD GAMBAR</h1>
          <form className="Form_upload_image">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={handle_upload}>Upload</button>
          </form>
          <div className="container mt-4">
            <div className="table_gambar">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr className="text-center">
                  <th style={{ backgroundColor: "black", color: "white" }}>No.</th>
                  <th style={{ backgroundColor: "black", color: "white" }}>Gambar</th>
                  <th style={{ backgroundColor: "black", color: "white" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {gambar &&
                  gambar.map((data, index) => (
                    <tr key={data._id} className="text-center">
                      <td>
                        <p>{index + 1}</p>
                      </td>
                      <td>
                        <img
                          src={"http://localhost:2000/images/" + data.Photo}
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => hapus(data._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default galeri_admin;
