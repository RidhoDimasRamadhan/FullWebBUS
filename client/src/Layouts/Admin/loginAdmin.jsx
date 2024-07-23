import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "/src/userContext";
import "/src/css/login_admin.css";

function Login_admin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  async function halaman_admin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:2000/loginAdmin", {
        email,
        password,
      });
      if (data.role === "Admin") {
        setUser(data);
        toast.success("Login Berhasil");
        navigate("/admin/halamanAdmin");
      } else {
        toast.error("Login Gagal");
      }
    } catch (error) {
      toast.error("Login Gagal");
    }
  }

  return (
    <>
      <div className="container loginAdmin ">
        <div className="card ">
          <div className="card-header text-center">
            <h3>Login Admin</h3>
          </div>
          <div className="card-body">
            <form onSubmit={halaman_admin}>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login_admin;

// {
//   <div className="card-body">
//     <form onSubmit={halaman_admin}>
//       <div className="mb-3">
//         <label for="email" className="form-label">
//           Email
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Masukkan Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label for="password" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Masukkan Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </div>
//     </form>
//   </div>;
// }
