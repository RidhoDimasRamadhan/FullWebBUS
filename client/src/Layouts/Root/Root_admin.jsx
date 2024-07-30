import Gambar4 from "/src/images/navbar/Logo1.png";
import { NavLink, Outlet } from "react-router-dom";

// import "/src/css/mainPage.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import { Admin } from "/src/userAdmin";
import { useContext } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Root_admin() {
  //   const navigate = useNavigate();
  //   async function logout() {
  //     axios.post("http://localhost:2000/logout").then(() => {
  //       localStorage.removeItem("token");
  //       setTimeout(function () {
  //         location.reload();
  //       }, 1000);
  //       toast.success("Logout Berhasil");
  //       navigate("/");
  //     });
  //   }
  // const { user } = useContext(Admin);

  // const cobak = user?.role === "admin";

  return (
    <>
      {/* {user?.role === "Admin" ? (} */}

      {/* <Navbar
        expand="lg"
        className="bg-body-tertiary "
        style={{ display: "block" }}
      >
      </Navbar> */}

      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Root_admin;
