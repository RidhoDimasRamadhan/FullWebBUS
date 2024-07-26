import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Beranda from "/src/Layouts/User/beranda.jsx";
import Profile from "/src/Layouts/User/profile.jsx";
import Harga from "/src/Layouts/User/harga.jsx";
import Kontak from "/src/Layouts/User/kontak.jsx";
import Armada from "/src/Layouts/User/armada.jsx";
// import Galeri from "/src/Layouts/User/galeri.jsx";
import RootLayout from "../../Layouts/Root/RootLayout";
import RootAdmin from "../../Layouts/Root/Root_admin";

import Registrasi from "/src/Layouts/User/registrasi_user.jsx";
import Login from "/src/Layouts/User/loginUser.jsx";
import Forgot from "/src/Layouts/User/lupa_password.jsx";
import No_page from "/src/Layouts/User/No_page.jsx";

// import Halaman_admin from "/src/Layouts/Admin/halaman_utama.jsx";
// import Login_admin from "/src/Layouts/Admin/loginAdmin.jsx";
// import Halaman_admin from "/src/Layouts/Admin/halaman_utama.jsx";

import Login_admin from "/src/Layouts/Admin/loginAdmin.jsx";
import Halaman_admin from "/src/Layouts/Admin/halaman_utama.jsx";

// sidebar
import Data_user from "/src/Layouts/Admin/data_user.jsx";
import Galeri from "/src/Layouts/User/galeri.jsx";
import Pemesanan from "/src/Layouts/Admin/order.jsx";

import Pesanan from "/src/Layouts/User/pesanan.jsx";
import Riwayat from "/src/Layouts/User/riwayat.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Beranda />} />
      <Route path="profile" element={<Profile />} />
      <Route path="harga" element={<Harga />} />
      <Route path="kontak" element={<Kontak />} />
      <Route path="armada" element={<Armada />} />
      <Route path="galeri" element={<Galeri />} />
      <Route path="login" element={<Login />} />
      <Route path="registrasi" element={<Registrasi />} />
      <Route path="lupaPassword" element={<Forgot />} />
      <Route path="pesan" element={<Pesanan />} />
      <Route path="hasil_order/:id" element={<Riwayat />} />
      {/* <Route path="halamanAdmin" element={<Halaman_admin />} /> */}
      {/* <Route path="admin/data_user" element={<Data_user />} /> */}
      <Route path="*" element={<No_page />} />
    </Route>
  )
);

function navbar() {
  return (
    <>
      <header>
        <RouterProvider router={router} />
      </header>
    </>
  );
}

export default navbar;
