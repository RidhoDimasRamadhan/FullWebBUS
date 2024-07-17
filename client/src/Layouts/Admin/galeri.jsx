import React, { useEffect } from "react";
import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import "/src/css/halaman_admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";

function galeri_admin() {
  const [file, setFile] = useState(null);
  // const [value, setValue] = useState();

  const [gambar, setGambar] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:2000/images")
      .then((result) => setGambar(result.data.Photo))
      .catch((err) => console.log(err));
  }, []);

  const handle_upload = (e) => {
    e.preventDefault();
    // console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    // axios.post("http://localhost:2000/upload",formData)

    axios.post("http://localhost:2000/upload", formData);
    toast.success("Image uploaded successfully");
    // setValue("");
    // if (value === "") {
    //   setValue(file);
    // }
    // .then((res) => {
    //   console.log(res);
    // })
    // .err((err) => console.log(err));
    // toast.error("Failed to upload image");

    // window.location.reload(false);
    // try {
    // } catch (err) {
    // }
  };

  return (
    <>
      <div className="d-flex">
        <div col-auto>
          <Halaman_utama />
        </div>
        <h1>Upload Image</h1>
        <form>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            // value={value}
          />
          <button onClick={handle_upload}>Upload</button>
        </form>
<br />
        <div>
          <br />  
          <tbody>
            {gambar.map((data) => (
              <tr key={data._id}>
                <td>
                  <img
                    src={data.Photo}
                    className="data"
                    alt=""
                  />
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
        </div>
      </div>
    </>
  );
}
export default galeri_admin;
