import Navbar from "../src/Components/header/navbar.jsx";
import axios from "axios";
axios.defaults.withCredentials = true;
import { Toaster } from "react-hot-toast";

import { UserContextProvider } from "/src/userContext.jsx";

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
          <Toaster position="top-center" toastOptions={{ duration: 3000 }} />;
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
