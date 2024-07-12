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
import Galeri from "/src/Layouts/User/galeri.jsx";
import RootLayout from "../../Layouts/Root/RootLayout";

import Registrasi from "/src/Layouts/User/registrasi_user.jsx";
import Login from "/src/Layouts/User/loginUser.jsx";
import Forgot from "/src/Layouts/User/lupa_password.jsx";


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
