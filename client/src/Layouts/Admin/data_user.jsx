import "/src/css/data_user.css";
import { useContext, useState, useEffect } from "react";
import { Admin } from "/src/userAdmin";
import axios from "axios";

import React from "react";
import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";

function data_user() {
  // const { user } = useContext(Admin);
  const [dataSiswa, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/halamanAdmin")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  //   const hapus = (id) => {
  //     axios
  //       .delete("http://localhost:3001/delete/" + id)
  //       .then((result) => {
  //         console.log(result);
  //         window.location.reload();
  //       })
  //       .catch((errr) => console.log(errr));
  //   };
  return (
    <body>
      <div className="d-flex">
        <div col-auto>
          <Halaman_utama />
        </div>

        <div className="home w-100">
          {/* {user?.role === "Admin" ? (
            <h1>fukk. {user?.username}</h1>
          ) : (
            <h1>hii. {user?.username}</h1>
          )}
          <h1>hii. {user?.username}</h1> */}
          <h1>ini adalah halaman user</h1>

          <table className="table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Kelas</th>
                <th>NPM</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataSiswa.map((identitas) => {
                return (
                  <tr key={identitas._id}>
                    <td>{identitas.username}</td>
                    <td>{identitas.email}</td>
                    {/* <td>{identitas.npm}</td> */}
                    <td>
                      {/* <Link
                      to={`/update/${identitas._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link> */}
                    </td>
                    <td>
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
    </body>
  );
}
export default data_user;
