import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "/src/css/halaman_armada_admin.css";

// const data = {'
export default function Armada() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/bookingsAdmin").then((result) => {
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
          <h1 className="text-center mt-3">HALAMAN PEMESANAN</h1>
          <div className="container mt-4 ">
            <div className="bg-white rounded ">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="text-center">
                    <tr>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        N0.
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Status
                      </th>
                      <th
                        style={{ backgroundColor: "black", color: "white" }}
                        className="text-start"
                      >
                        Nama User
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Nama Bis
                      </th>
                      <th
                        style={{ backgroundColor: "black", color: "white" }}
                        className="text-start"
                      >
                        Gambar Bus
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        No.telepon
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Update Konfirmasi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.map((data, index) => (
                      <tr key={data._id}>
                        <td>{index + 1}</td>
                        <td>
                          {data.order === "true" ? (
                            <p style={{ color: "green", fontWeight: "bold" }}>
                              Confirmed
                            </p>
                          ) : (
                            <p style={{ color: "red", fontWeight: "bold" }}>
                              Not Confirmed
                            </p>
                          )}
                        </td>
                        <td>{data.user_id?.username}</td>
                        <td>{data.armada_id?.nama_bis}</td>
                        <td>
                          <img
                            src={data.armada_id?.gambar_bis} // {{ URL: data.gambar_bis }}
                            // src={data.gambar_bis}
                            className="rounded"
                            alt=""
                            style={{ width: "200px", height: "150px" }}
                          />
                        </td>
                        <td>
                          <p>{data.nomor_telepon}</p>
                        </td>

                        <td className="text-center ">
                          <button className="btn btn-primary mt-5">
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
