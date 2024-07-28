import Halaman_utama from "/src/Layouts/Admin/halaman_utama.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "/src/css/halaman_armada_admin.css";

// const data = {'
export default function Armada() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/bookingsAdmin").then((result) => {
      setBooking(result.data);
    });
  }, []);

  const hapus = async (id) => {
    try {
      await axios
        .delete("http://localhost:2000/delete_armada/" + id)
        .then((result) => {
          console.log(result);
          toast.success("Delete Berhasil");
        })
        .catch((errr) => console.log(errr));
    } catch (error) {
      console.log(error);
      toast.error("Delete Gagal");
    }
  };
  return (
    <>
      <div className="d-flex w-100">
        <div col-auto>
          <Halaman_utama />
        </div>

        <div className="armada_Admin">
          <h1 className="text-center">HALAMAN PEMESANAN</h1>
          <div className="bg-white rounded w-50 p-2">
            <div className="table_armada mt-4">
              <table className="table table-responsive">
                <thead>
                  <tr className="text-center">
                    <th>N0.</th>
                    <th className="text-start">Nama User</th>
                    <th className="text-start">Nama Bis</th>
                    <th className="text-start">Nama Bus</th>
                    <th>Gambar Bus</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {booking.map((data, index) => (
                    <tr key={data._id}>
                      <td>{index + 1}</td>
                      <td>{data.user_id?.username}</td>
                      <td>{data.armada_id?.nama_bis}</td>
                      <td>
                        <img
                          src={data.armada_id?.gambar_bis} // {{ URL: data.gambar_bis }}
                          // src={data.gambar_bis}
                          className="rounded"
                          alt=""
                          style={{ width: "200px", height: "150px" }}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => hapus(data._id)}
                        >
                          Delete
                        </button>
                        <button className="btn btn-primary ms-1">
                          <Link
                            className="text-white text-decoration-none"
                            to={`/admin/update_order/${data._id}`}
                          >
                            Update
                          </Link>
                        </button>
                      </td>

                      <h1>{data.nomor_telepon}</h1>
                      {/* <h1>{data.user_id?.username}</h1>
                      <h1>{data.armada_id?.nama_bis}</h1> */}
                      {/* <h1>{data.tanggal_berangkat}</h1> */}
                    </tr>
                  ))}

                  {/* {booking.map((data) => (
                    <>
                      <div className="container">
                        <div className="form">
                          <h6>Nama Bus : {JSON.stringify(data.user_id)}</h6>
                          <h6>Nama Bus : {data.user_id}</h6>
                          <h6>
                            <img
                              src={data.armada_id}
                              style={{ width: "300px", height: "300px" }}
                              alt=""
                            />
                          </h6>
                          <h6>Tanggal Berangkat : {data.tanggal_berangkat}</h6>
                          <h6>Tanggal Selesai : {data.tanggal_berangkat}</h6>
                          <h6></h6>
                        </div>
                      </div>
                    </>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// {
//  "_id": "66a2a3f96ef9eb62e127cad2",
//         "armada_id": {
//             "_id": "669f73ad563542fa24ec81bf",
//             "gambar_bis": "a.jpg",
//             "__v": 0,
//             "ac": "Ya",
//             "bahan_bakar": "dss",
//             "karaoke": "Ya",
//             "nama_bis": "bau",
//             "selimut_bantal": "Ya",
//             "tempat_duduk": 12,
//             "wifi_youtube": "Ya"
//         },
//         "user_id": {
//             "_id": "66917ed66ce771639ca44c3b",
//             "username": "h",
//             "email": "h@gmail.com",
//             "password": "$2b$10$v2a3M0Gc.s2gdEGlMfmbNe6uo6hmdZhaAyfQIdUdSWYWRr/pilE7m",
//             "role": "User",
//             "__v": 0
//         },
//         "nomor_telepon": 121,
//         "tanggal_berangkat": "2024-07-13",
//         "tanggal_pulang": "2024-08-10",
//         "order": "false",
//         "__v": 0
//     }

// const MyComponent = () => {
//   const [dataArray, setDataArray] = useState([]); // State to hold the fetched data
//   const [loading, setLoading] = useState(true); // State to indicate loading
//   const [error, setError] = useState(null); // State to hold any errors

//   useEffect(() => {
//     // Replace 'API_URL' with your actual API endpoint
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:2000/bookingsAdmin");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         setDataArray(result); // Assuming result is an array
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   // Extract usernames from the array
//   const usernames = dataArray.map(
//     (item) => item.user_id?.username || "Username not available"
//   );

//   return (
//     <div>
//       <h1>User Information</h1>
//       <ul>
//         {usernames.map((username, index) => (
//           <li key={index}>
//             <strong>Username:</strong> {username}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;
