import "/src/css/data_user.css";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import React from "react";
import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import "/src/css/halaman_admin.css";

function data_user() {
  // const { user } = useContext(Admin);
  const [dataSiswa, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/halamanAdmin")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <body>
      <div className="d-flex">
        <div col-auto>
          <Halaman_utama />
        </div>

        <div className="home w-100">
          <h1 className="text-center mt-3">Halaman User</h1>

          <div className="container mt-4">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr className="text-center">
                    <th style={{ backgroundColor: "black", color: "white" }}>
                      No
                    </th>
                    <th style={{ backgroundColor: "black", color: "white" }}>
                      Nama
                    </th>
                    <th style={{ backgroundColor: "black", color: "white" }}>
                      Email
                    </th>
                    <th style={{ backgroundColor: "black", color: "white" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataSiswa.map((identitas, data) => {
                    return (
                      <tr key={identitas._id}>
                        <td>{data + 1}</td>
                        <td>{identitas.username}</td>
                        <td>{identitas.email}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger"
                            onClick={() => hapus(identitas._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default data_user;
