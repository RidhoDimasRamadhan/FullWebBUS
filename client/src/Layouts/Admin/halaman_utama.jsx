import { useContext } from "react";
import { Context } from "/src/userContext";
import axios from "axios";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "/src/css/halaman_admin.css";

// import Data_user from "/src/Layouts/Admin/data_user.jsx";
function halaman_admin() {
  const { user } = useContext(Context);
  const navigate = useNavigate();


  async function logout() {
    axios.post("http://localhost:2000/logout").then(() => {
      localStorage.removeItem("token");
      setTimeout(function () {
        location.reload();
      }, 1000);
      toast.success("Logout Berhasil");
      navigate("/admin");
    });
  }

  return (
    <body className="d-flex min-vh-100">
      <div className="d-flex flex-column bg-dark text-white p-4 jusify-content-between">
        <a
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <i className="fs-5 "></i>
          <span className="fs-5 ms-2  ">Welcome, {user?.username}</span>
        </a>
        <hr className="text-secondary mt-3" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <NavLink to="/data_user" className="nav-link text-white">
              <i className="fs-5 ">
                <span className="fs-5 ms-2">User</span>
              </i>
            </NavLink>
          </li>
          <li className="nav-item p-1">
            <NavLink to="/galeri_admin" className="nav-link text-white">
              <i className="fs-5 ">
                <span className="fs-5 ms-2 ">Gallery</span>
              </i>
            </NavLink>
          </li>
          <NavLink to="/pemesanan" className="nav-link text-white">
            <i className="fs-5 ">
              <span className="fs-5 ms-2 ">Order</span>
            </i>
          </NavLink>
        </ul>
        <hr className="text-secondary" />
        <button type="button" className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </body>
  );
}
export default halaman_admin;
