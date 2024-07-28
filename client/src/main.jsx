import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Login from "./Login_admin.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("user")).render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("admin")).render(
//   <React.StrictMode >
//     {/* <App /> */}
//     <Login />
//   </React.StrictMode>
// );
