import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Select from "react-select";

import { Link } from "react-router-dom";

// import Calendar from "react-calendar";
const Create = () => {
  const { id } = useParams();

  const [Order, setOrder] = useState();

  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/detail_armada_admin/" + id)
      .then((result) => {
        console.log(result);
        setOrder(result.data.order);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:2000/update_order_admin/" + id, {
        Order,
      })
      .then((result) => {
        console.log(result);
        alert("Data Berhasil Terupdate");
        Navigate("/admin/armada");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <form onSubmit={Update} className="ms-5 me-5 mt-5">
          <h2>Edit Armada</h2>
          <div className="mb-3">
            <label className="form-label">Nama Bis</label>
            <input
              type="text"
              placeholder="Masukkan nama Bis disini"
              className="form-control"
              value={Order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>

          <button className="btn btn-success"> Submit</button>
        </form>
      </div>
      <Link to={"/admin/armada"}>back</Link>
      {/* <button>back</button> */}
    </>
  );
};

export default Create;
