import "/src/css/login_user.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "/src/userContext";

function LOGIN() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  async function masuk_halaman(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:2000/login", {
        email,
        password,
      });
      if (data.role === "User") {
        setUser(data);
        toast.success("Login Berhasil", {
          duration: 1000,
        });
        navigate("/");
      } else {
        toast.error("Login Gagal");
      }
      //   setUser(data);
      //   toast.success("Login Berhasil");
      //   navigate("/");
    } catch (error) {
      toast.error("Login Gagal");
      //   alert("Login Gagal");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 loginUser">
            <div className="card">
              <div className="card-header text-center">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={masuk_halaman}>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Masukkan Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Masukkan Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <div className="mt-3 text-center">
                    <Link to="/lupaPassword">Forgot password?</Link>
                  </div>
                  <div className="mt-3 text-center">
                    <p>
                      Don't have an account?{" "}
                      <Link to="/registrasi">Register</Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LOGIN;
