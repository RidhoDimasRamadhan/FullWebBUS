import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "/src/css/halaman_armada_admin.css";
export default function Armada() {
  const [Order, setOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/bookings").then((result) => {
      setOrder(result.data);
    });
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

        <div className="armada_Admin">
          <h1 className="text-center">HALAMAN PEMESANAN</h1>
          <div className="bg-white rounded w-50 p-2">
            <div className="table_armada mt-4">
              <table className="table table-responsive">
                <thead>
                  <tr className="text-center">
                    <th>N0.</th>
                    <th className="text-start">Nama Pesanan</th>
                    <th className="text-start">Nama Bus</th>
                    <th>Gambar Bus</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Order?.length > 0 &&
                    Order.map((data, index) => (
                      <tr key={data._id}>
                        <td>{index + 1}</td>
                        <td>{data.user_id.username}</td>
                        <td>
                          <img
                            src={data.armada_id.gambar_bis} // {{ URL: data.gambar_bis }}
                            // src={data.gambar_bis}
                            className="rounded"
                            alt=""
                            style={{ width: "200px", height: "150px" }}
                          />
                        </td>
                        <td>
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
    </>
  );
}
