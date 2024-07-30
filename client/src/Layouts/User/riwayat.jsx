import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
import Danger from "../../Components/buttonWA/danger";


import "/src/css/booking.css";
function Riwayat() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/bookings").then((result) => {
      setBooking(result.data);
    });
  }, []);

  const hapus = async (id) => {
    try {
      await axios
        .delete("http://localhost:2000/delete_pesanan/" + id)
        .then((result) => {
          console.log(result);
          toast.success("Delete Berhasil", {
            autoClose: 2000,
          });
          navigate("/hasil_order/:id");
          setTimeout(() => {
            window.location.reload();
          }, 899);
        })
        .catch((errr) => console.log(errr));
    } catch (error) {
      console.log(error);
      toast.error("Delete Gagal");
    }
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1>Halaman Pemesanan</h1>
      <br />
      <div className="col-12 ketentuan ms-3">
        <Whatsapp />

        <i>{<Danger />}</i>
        <p>Syarat & Ketentuan Pemesanan Bus</p>
        <br />
      </div>
      <div className="syarat">
        <ol>
          <li>
            Harap cek{" "}
            <span style={{ fontWeight: "bolder", color: "black" }}>
              " Status "
            </span>{" "}
            secara berkala, bisa menghubungi via WhatsApp di pojok kanan bawah
          </li>
          <li>
            Jika Status{" "}
            <span style={{ fontWeight: "bolder", color: "green" }}>
              " Confirmed "
            </span>
            tidak bisa melakukan pembatalan pesanan.
          </li>
          <li>
            Jika Status{" "}
            <span style={{ fontWeight: "bolder", color: "red" }}>
              " Not Confirmed "
            </span>
            bisa melakukan pembatalan pesanan.
          </li>
          <li>
            Jika melakukan pembatalan pesanan SAAT{" "}
            <span style={{ fontWeight: "bolder", color: "black" }}>
              Status :
            </span>{" "}
            <span style={{ fontWeight: "bolder", color: "green" }}>
              " Confirmed " </span>
             atau 3x24jam sebelum tanggal berangkat maka akan dikenakan CHARGE yaitu
            uang akan dikembalikan 50% (Uang Muka){" "}
          </li>
        </ol>
      </div>
      <div className="booking">
        {booking?.length > 0 &&
          booking.map((data) => (
            <div className="container booking2">
              <div className="kiri">
                <img
                  src={data.armada_id.gambar_bis}
                  style={{ width: "300px", height: "300px" }}
                  alt=""
                />
              </div>
              <div className="kanan">
                <div className="form ">
                  <h6>
                    <span style={{ fontWeight: "bolder" }}> Nama Bus :</span>{" "}
                    {data.armada_id.nama_bis}
                  </h6>
                  <h6>
                    <span style={{ fontWeight: "bolder" }}>
                      {" "}
                      Nama Pemesan :
                    </span>{" "}
                    {data.user_id.username}
                  </h6>

                  <h6>
                    <span style={{ fontWeight: "bolder" }}>
                      {" "}
                      Tanggal Pesan :
                    </span>{" "}
                    {data.tanggal_pesan}
                  </h6>
                  <h6>
                    <span style={{ fontWeight: "bolder" }}>
                      {" "}
                      Tanggal Berangkat :
                    </span>{" "}
                    {data.tanggal_berangkat}
                  </h6>
                  <h6>
                    <span style={{ fontWeight: "bolder" }}>
                      {" "}
                      Tanggal Selesai :
                    </span>{" "}
                    {data.tanggal_berangkat}
                  </h6>
                  <h6>
                    <span style={{ fontWeight: "bolder" }}> Status : </span>
                    {data.order === "true" ? (
                      <h6
                        style={{
                          color: "green",
                          fontWeight: "bolder",
                          display: "inline",
                        }}
                      >
                        CONFIRMED
                      </h6>
                    ) : (
                      <h6
                        style={{
                          color: "red",
                          fontWeight: "bolder",
                          display: "inline",
                        }}
                      >
                        {" "}
                        NOT CONFIRMED
                      </h6>
                    )}
                    <br />
                  </h6>
                  <div className="batal">
                    {data.order === "true" ? (
                      ""
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => hapus(data._id)}
                      >
                        Batalkan Pesanan
                      </button>
                    )}

                    <br />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default Riwayat;
