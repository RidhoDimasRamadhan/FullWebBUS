import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login_admin.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import User from "./App.jsx";

ReactDOM.createRoot(document.getElementById("admin")).render(
  <React.StrictMode>
    <Login />
    {/* <User/> */}
  </React.StrictMode>
);
