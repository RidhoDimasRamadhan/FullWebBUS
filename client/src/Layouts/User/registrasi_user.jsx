import React from "react";
import "/src/css/registrasi.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Registrasi = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function Register(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2000/registrasi", {
        username,
        email,
        password,
      });
      toast.success("Registrasi Berhasil");
    //   alert("Registrasi Berhasil");
      navigate("/login");
    } catch (error) {
        toast.error("Registrasi Gagal");
    //   alert("Registrasi Gagal");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6 registrasi">
            <div className="card">
              <div className="card-header text-center">
                <h3>Register</h3>
              </div>
              <div className="card-body">
                <form onSubmit={Register}>
                  <div className="mb-3">
                    <label for="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      placeholder="Masukkan Username "
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Masukkan Email"
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
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Masukkan Password"
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    <Link to="/login" className="link">
                      Already have an account? Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrasi;
