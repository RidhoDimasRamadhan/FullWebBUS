import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Admin } from "/src/userAdmin";
import "/src/css/login_admin.css";

function Login_admin() {
  // const { id } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setAdmin } = useContext(Admin);
  async function halaman_admin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:2000/loginAdmin", {
        // id,
        email,
        password,
      });
      setAdmin(data);
      toast.success("Login Berhasil");
      navigate("/admin/halamanAdmin");
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
