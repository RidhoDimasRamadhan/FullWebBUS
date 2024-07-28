import Navbar from "../src/Components/header/navbar.jsx";
import Navbar_admin from "../src/Components/header/navbar_admin.jsx";

import axios from "axios";
axios.defaults.withCredentials = true;
import { Toaster } from "react-hot-toast";

import { AdminContextProvider } from "/src/userAdmin.jsx";
import { UserContextProvider } from "/src/userContext.jsx";

// import Navbar_admin from "../src/Components/header/navbar_admin.jsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import Login from "./Login_admin.jsx";

import RootAdmin from "/src/Layouts/Root/Root_admin";

import Login_admin from "/src/Layouts/Admin/loginAdmin.jsx";
import Halaman_admin from "/src/Layouts/Admin/halaman_utama.jsx";

// sidebar
import Data_user from "/src/Layouts/Admin/data_user.jsx";
import Galeri from "/src/Layouts/Admin/galeri.jsx";
import Pemesanan from "/src/Layouts/Admin/order.jsx";

import No_page from "/src/Layouts/User/No_page.jsx";

import Armada from "/src/Layouts/Admin/armada.jsx";
import Create_armada from "/src/Layouts/Admin/CRUD/Create_armada.jsx";
import EditArmada from "/src/Layouts/Admin/CRUD/Edit_Armada.jsx";
import EditOrder from "/src/Layouts/Admin/CRUD/edit_order.jsx";
function App() {
  return (
    <>
      {/* <main>
        <BrowserRouter>
        <header>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Beranda</NavLink>
        </header>
        <Routes>
        <Route index element={<Beranda />} />
        <Route path="profile" element={<Profile />} />
        </Routes>
        </BrowserRouter>
      </main> */}

      <div>
        <UserContextProvider>
          {<Navbar />}
          {/* {<Navbar_admin />} */}
          <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        </UserContextProvider>

        {/* <Route path="/admin/" element={<RootAdmin />}>
            <Route index element={<Login_admin />} />
            <Route path="halamanAdmin" element={<Halaman_admin />} />
            <Route path="data_user" element={<Data_user />} />
            <Route path="galeri_admin" element={<Galeri />} />
            <Route path="pemesanan" element={<Pemesanan />} />
            <Route path="armada" element={<Armada />} />
            <Route path="create_armada" element={<Create_armada />} />
            <Route path="update_armada/:id" element={<EditArmada />} />
            <Route path="update_order/:id" element={<EditOrder />} />
            <Route path="*" element={<No_page />} />
          </Route> */}
        {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
