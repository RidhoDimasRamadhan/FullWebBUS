import { UserContextProvider } from "/src/userContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";

import Login_admin from "/src/Layouts/Admin/loginAdmin.jsx";
import Halaman_admin from "/src/Layouts/Admin/halaman_utama.jsx";

// sidebar
import Data_user from "/src/Layouts/Admin/data_user.jsx";
import Galeri from "/src/Layouts/Admin/galeri.jsx";
import Pemesanan from "/src/Layouts/Admin/order.jsx";
axios.defaults.withCredentials = true;
function ADMIN() {
  return (
    <>
      <div>
        <UserContextProvider>
          <BrowserRouter>
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
            <Routes>
              <Route path="/halamanAdmin" element={<Halaman_admin />} />
              <Route path="/admin" element={<Login_admin />} />
              <Route path="/data_user" element={<Data_user />} />
              <Route path="/galeri_admin" element={<Galeri />} />
              <Route path="/pemesanan" element={<Pemesanan />} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </div>
    </>
  );
}

export default ADMIN;
