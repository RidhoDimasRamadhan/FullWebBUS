import Ac from "/src/images/order/AcDingin.svg";
import Diesel from "/src/images/order/Diesel.svg";
import Karaoke from "/src/images/order/Karaoke.svg";
import Kursi from "/src/images/order/Kursi.svg";
import SelimutBantal from "/src/images/order/SelimutBantal.svg";
import Wifi from "/src/images/order/Wifi.svg";

import React, { useContext, useState } from "react";
import "/src/css/modal2.css";

// import { Link } from "react-router-dom";
import { Context } from "/src/userContext";

import { Link } from "react-router-dom";

import Danger from "../../Components/buttonWA/danger";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Modal = ({ activeModal, closeModal, data }) => {
  const { user } = useContext(Context);

  const navigate = useNavigate();
  const [nomor_telepon, setNomor_telepon] = useState();
  const [tanggal_mulai, setTanggal_mulai] = useState();
  const [tanggal_selesai, setTanggal_selesai] = useState();
  // const [nama, setNama] = useState();

  if (!activeModal) return null;

  // useEffect(() => {
  //   if (user) {
  //     setNama(user.username);
  //   }
  // }, [user]);
  async function Order() {
    const response = await axios.post("http://localhost:2000/pesan_bus", {
      armada_id: data._id,
      nomor_telepon: nomor_telepon,
      tanggal_berangkat: tanggal_mulai,
      tanggal_pulang: tanggal_selesai,
    });
    const bookingId = response.data._id;
    navigate(`/hasil_order/${bookingId}`);
  }

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        {data ? (
          <>
            <div
              className="row justify-content-center xl-12"
              style={{ marginTop: "30px" }}
            >
              <div className="col-6 gambar">
                <div className="col-12 gambar_utama">
                  <img
                    src={data.gambar_bis}
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </div>

                <div className="row">
                  <div className="col-6 pesanKiri">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-4 kursiBesar">
                            <div className="col-4 kursi">
                              <img
                                src={Kursi}
                                className="img-pesan"
                                alt="Responsive image"
                              />
                            </div>
                            <div className="col-4 kursi">
                              <img
                                src={Diesel}
                                className="img-pesan"
                                alt="Responsive image"
                              />
                            </div>
                            <div className="col-4 kursi">
                              <img
                                src={Wifi}
                                className="img-pesan"
                                alt="Responsive image"
                              />
                            </div>
                          </div>
                          <div className="col-8 mejaBesar">
                            <div className="col-12 meja ">
                              <p>TEMPAT DUDUK</p>
                              <p className="keterangan">{data.tempat_duduk}</p>
                            </div>
                            <div className="col-12 meja">
                              <p>Bahan Bakar</p>
                              <p className="keterangan">{data.bahan_bakar}</p>
                            </div>
                            <div className="col-12 meja">
                              <p>WIFI & YOUTUBE</p>
                              <p className="keterangan">{data.wifi_youtube}</p>
                            </div>
                          </div>
                        </div>
                        <div className="row"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 pesanKanan">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-4 kursiBesar">
                            <div className="col-4 kursi">
                              <img
                                src={Ac}
                                className="img-pesan"
                                alt="Responsive image"
                              />
                            </div>
                            <div className="col-4 kursi">
                              <img
                                src={Karaoke}
                                className="img-pesan"
                                alt="Responsive image"
                              />
                            </div>
                            <div className="col-4 kursi">
                              <img
                                src={SelimutBantal}
                                className="img-pesan"
                                alt="Responsive image"
                              />
                            </div>
                          </div>
                          <div className="col-8 mejaBesar">
                            <div className="col-12 meja ">
                              <p>AC DINGIN</p>
                              <p className="keterangan">{data.ac}</p>
                            </div>
                            <div className="col-12 meja">
                              <p>KARAOKE</p>
                              <p className="keterangan">{data.karaoke}</p>
                            </div>
                            <div className="col-12 meja">
                              <p>SELIMUT & BANTAL</p>
                              <p className="keterangan">
                                {data.selimut_bantal}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 kalimatModal">
                <div className="row">
                  <div className="col-12">
                    <div className="container nama_bis">
                      <h1>{data.nama_bis}</h1>
                    </div>
                  </div>
                </div>

                <div className="row form-control mt-2">
                  <div className="col-12">
                    <label htmlFor="" className="Label ">
                      Nomor Telepon
                    </label>{" "}
                    <br />
                    <input
                      type="number"
                      value={nomor_telepon}
                      onChange={(e) => setNomor_telepon(e.target.value)}
                      placeholder="Masukkan nomor telepon"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="" className="Label">
                      TanggaL Mulai Perjalanan
                    </label>{" "}
                    <br />
                    <input
                      type="date"
                      className="form-control"
                      value={tanggal_mulai}
                      onChange={(e) => setTanggal_mulai(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="" className="Label">
                      TanggaL Akhir Perjalanan
                    </label>{" "}
                    <br />
                    <input
                      type="date"
                      className="form-control"
                      value={tanggal_selesai}
                      onChange={(e) => setTanggal_selesai(e.target.value)}
                    />
                  </div>

                  <div className="col-12 ketentuan">
                    <i>{<Danger />}</i>
                    <p>Syarat & Ketentuan Pesan Bus</p>
                    <br />
                  </div>
                  <div className="syarat">
                    <ol>
                      <li>
                        Jika melakukan pembatalan pesanan, maksimal 5 hari
                        sebelum tanggal berangkat.
                      </li>
                      <li>
                        Jika melakukan pembatalan pesanan, melewati 5 hari
                        sebelum tanggal berangkat maka akan dikenakan CHARGE
                        yaitu uang akan dikembalikan 50% (Uang Muka){" "}
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="row form-control">
                  <div className="row">
                    <div className="col-12">
                      <div className="container ">
                        <div className="row pesanModal">
                          {user ? (
                            // <Link to={"/registrasi"}>

                            <div className="col-12 text-center text-white">
                              <button onClick={Order}>Pesan Bus</button>
                            </div>
                          ) : (
                            // {/* </Link> */}
                            <Link to={"/registrasi"}>
                              <div className="col-12">Pesan Sekarang</div>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Modal;
