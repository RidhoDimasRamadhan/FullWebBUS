import Navbar from "../src/Components/header/navbar.jsx";
import axios from "axios";
axios.defaults.withCredentials = true;
import { Toaster } from "react-hot-toast";

import { UserContextProvider } from "/src/userContext.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Navbar_admin from "../src/Components/header/navbar_admin.jsx";
// import Login from "./Login_admin.jsx";

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
      </div>
    </>
  );
}

export default App;
