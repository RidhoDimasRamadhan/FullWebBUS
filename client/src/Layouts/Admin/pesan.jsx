import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "/src/css/halaman_armada_admin.css";

// const data = {'
export default function Armada() {
  const [pesan, setBooking] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/kontak").then((result) => {
      setBooking(result.data);
    });
  }, []);

  return (
    <>
      <div className="d-flex ">
        <div col-auto>
          <Halaman_utama />
        </div>

        <div className="armada_Admin w-100 ">
          <h1 className="text-center mt-3">HALAMAN PESAN DARI USER</h1>
          <div className="container mt-4 ">
            <div className="bg-white rounded ">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="text-center">
                    <tr>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        N0.
                      </th>
                      <th
                        style={{ backgroundColor: "black", color: "white" }}
                        className="text-start"
                      >
                        Nama User
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Nama Lengkap
                      </th>
                      <th
                        style={{ backgroundColor: "black", color: "white" }}
                        className="text-start"
                      >
                        Pesan
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        No.telepon
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Status
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Update Konfirmasi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pesan.map((data, index) => (
                      <tr key={data._id}>
                        <td>{index + 1}</td>
                        <td>{data.user_id?.username}</td>
                        <td>{data.nama_lengkap}</td>
                        <td>{data.pesan}</td>
                        <td>
                          <p>{data.no_telepon}</p>
                        </td>
                        <td>
                          {data.dibaca === "true"
                            ? "Sudah Dibaca"
                            : "Belum Dibaca"}
                        </td>
                        <td className="text-center ">
                          <button className="btn btn-primary">
                            <Link
                              className="text-white text-decoration-none "
                              to={`/admin/update_order/${data._id}`}
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
