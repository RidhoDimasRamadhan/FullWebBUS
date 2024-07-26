import axios from "axios";
import { useEffect, useState } from "react";

function Riwayat() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/bookings").then((result) => {
      setBooking(result.data);
    });
  }, []);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Halaman Pemesanan</h1>

      {booking?.length > 0 &&
        booking.map((data) => (
          <>
            <div className="container">
              <div className="form">
                <h6>Nama Bus : {data.armada_id.nama_bis}</h6>
                <h6>Nama Bus : {data.user_id.username}</h6>
                <h6>
                  <img
                    src={data.armada_id.gambar_bis}
                    style={{ width: "300px", height: "300px" }}
                    alt=""
                  />
                </h6>
                <h6>Tanggal Berangkat : {data.tanggal_berangkat}</h6>
                <h6>Tanggal Selesai : {data.tanggal_berangkat}</h6>
                <h6>Status : {data.status ? "Confirmedr" : "Not Confirmed"}</h6>
              </div>
            </div>
          </>
        ))}
    </>
  );
}
export default Riwayat;
