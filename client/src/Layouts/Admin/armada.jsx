import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "/src/css/halaman_armada_admin.css";
export default function Armada() {
  const [DataArmada, setArmada] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/get_armada")
      .then((result) => setArmada(result.data))
      .catch((err) => console.log(err));
  }, []);

  const hapus = async (id) => {
    try {
      await axios
        .delete("http://localhost:2000/delete_armada/" + id)
        .then((result) => {
          console.log(result);
          toast.success("Delete Berhasil");
        })
        .catch((errr) => console.log(errr));
    } catch (error) {
      console.log(error);
      toast.error("Delete Gagal");
    }
  };
  return (
    <>
      <div className="d-flex w-100">
        <div col-auto>
          <Halaman_utama />
        </div>

            <div className="armada_Admin w-100">
          <h1 className="text-center mt-3">HALAMAN ARMADA</h1>
          <div className="add ms-4">

            <Link
              to="/admin/create_armada"
              className="btn btn-success me-2 mt-5"
              >
              Add Armada +
            </Link>
              </div>

              <div className="container mt-4 ">
                <div className="bg-white rounded ">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="text-center">
                        <tr className="text-center">
                          <th style={{ backgroundColor: "black", color: "white" }}>No.</th>
                          <th style={{ backgroundColor: "black", color: "white" }} >Nama Armada</th>
                          <th style={{ backgroundColor: "black", color: "white" }}>Gambar Armada</th>
                          <th style={{ backgroundColor: "black", color: "white" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {DataArmada &&
                          DataArmada.map((data, index) => (
                            <tr key={data._id}>
                              <td className="text-center">{index + 1}</td>
                              <td>{data.nama_bis}</td>
                              <td className="text-center">
                                <img
                                  src={data.gambar_bis} // {{ URL: data.gambar_bis }}
                                  // src={data.gambar_bis}
                                  className="rounded"
                                  alt=""
                                  style={{ width: "200px", height: "150px" }}
                                />
                              </td>
                              <td className="text-center">
                                <button
                                  className="btn btn-danger"
                                  onClick={() => hapus(data._id)}
                                >
                                  Delete
                                </button>
                                <button className="btn btn-primary ms-1">
                                  <Link
                                    className="text-white text-decoration-none"
                                    to={`/admin/update_armada/${data._id}`}
                                  >
                                    Update
                                  </Link>
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
          </div>
    </>
  );
}
