import Gambar4 from "/src/images/navbar/Logo1.png";
import { NavLink, Outlet } from "react-router-dom";

import "/src/css/mainPage.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Context } from "/src/userContext";
import { useContext } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RootLayout() {
  const navigate = useNavigate();
  async function logout() {
    axios.post("http://localhost:2000/logout").then(() => {
      localStorage.removeItem("token");
      setTimeout(function () {
        location.reload();
      }, 1000);
      toast.success("Logout Berhasil");
      navigate("/");
    });
  }
  const { user } = useContext(Context);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary "
        style={{ position: "fixed", zIndex: "9999", width: "100%" }}
      >
        {user ? (
          <Container>
            <Navbar.Brand href="#home">
              <img src={Gambar4} alt="Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <NavLink to="/" className="navbarlink">
                  Beranda
                </NavLink>
                <NavLink to="/profile" className="navbarlink">
                  Profile
                </NavLink>
                <NavLink to="/armada" className="navbarlink">
                  Armada
                </NavLink>
                <NavLink to="/galeri" className="navbarlink">
                  Galeri
                </NavLink>
                <NavLink to="/harga" className="navbarlink">
                  Harga
                </NavLink>
                <NavLink to="/kontak" className="navbarlink">
                  Kontak
                </NavLink>
              </Nav>
              <h5>Haii, {user?.username}</h5>
              <NavLink
                style={{ backgroundColor: "red", marginLeft: "1rem" }}
                className="navbarlink"
              >
                <button onClick={logout} type="submit" className="button">
                  logout
                </button>
              </NavLink>
            </Navbar.Collapse>
          </Container>
        ) : (
          <Container>
            <Navbar.Brand href="#home">
              <img src={Gambar4} alt="Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <NavLink to="/" className="navbarlink">
                  Beranda
                </NavLink>
                <NavLink to="/profile" className="navbarlink">
                  Profile
                </NavLink>
                <NavLink to="/armada" className="navbarlink">
                  Armada
                </NavLink>
                <NavLink to="/galeri" className="navbarlink">
                  Galeri
                </NavLink>
                <NavLink to="/harga" className="navbarlink">
                  Harga
                </NavLink>
                <NavLink to="/kontak" className="navbarlink">
                  Kontak
                </NavLink>
              </Nav>
              <NavLink to="/login" className="navbarlink">
                Login
              </NavLink>
              <NavLink to="/registrasi" className="navbarlink">
                Registrasi
              </NavLink>
            </Navbar.Collapse>
          </Container>
        )}
        {/* <Container>
          <Navbar.Brand href="#home">
            <img src={Gambar4} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/" className="navbarlink">
                Beranda
              </NavLink>
              <NavLink to="/profile" className="navbarlink">
                Profile
              </NavLink>
              <NavLink to="/armada" className="navbarlink">
                Armada
              </NavLink>
              <NavLink to="/galeri" className="navbarlink">
                Galeri
              </NavLink>
              <NavLink to="/harga" className="navbarlink">
                Harga
              </NavLink>
              <NavLink to="/kontak" className="navbarlink">
                Kontak
              </NavLink>
            </Nav>
            <h1>{user?.username}</h1>
            <NavLink to="/login" className="navbarlink">
              Login
            </NavLink>
            <NavLink to="/registrasi" className="navbarlink">
              Registrasi
            </NavLink>
          </Navbar.Collapse>
        </Container> */}
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
