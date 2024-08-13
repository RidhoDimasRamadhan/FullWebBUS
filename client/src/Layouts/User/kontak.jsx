import Gambar1 from "/src/images/kontak/peta.png";
import "/src/css/kontak.css";
import Footer from "/src/Components/footer/footerLayout.jsx";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";

import { Context } from "/src/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
function Kontak() {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [nama_lengkap, setnama_lengkap] = useState();
  const [email, setEmail] = useState();
  const [kategori, setkategori] = useState();
  const [no_telepon, setno_telepon] = useState();
  const [pesan, setpesan] = useState();

  async function Order(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2000/pesan_user", {
        nama_lengkap: nama_lengkap,
        email: email,
        kategori: kategori,
        no_telepon: no_telepon,
        pesan: pesan,
      });
      toast.success("Pesan Berhasil Terkirim, TerimaKasih !!", {
        duration: 2000,
      });
      navigate(`/kontak`);
    } catch (error) {
      toast.error("Pesan Gagal !!");
    }
  }
  return (
    <>
      <Whatsapp />
      <section className="d-flex justify-content-center justify-content-lg-between section">
        <div className="container-fluid text-md-star section-kontak">
          <img src={Gambar1} alt="" className="img-peta" />
          <div className="headline-kontak mb-5">
            <h2>
              Informasi <span className="text-brown">Kontak</span> Kami
            </h2>
            <p>
              Punya pertanyaan terkait produk dan layanan NARADATRANS? Tim kami
              siap membantu Anda.
            </p>
          </div>
          <div className="d-xl-flex d-sm-block">
            <form
              className="row g-3"
              action="https://formsubmit.co/your@email.com"
              onSubmit={Order}
            >
              <div className="col-xl-5 col-md-6 col-lg-6">
                <label className="form-label">
                  Nama Lengkap <label className="star">*</label>
                </label>
                <input
                  type="text"
                  name="Fullname"
                  className="form-control"
                  placeholder="Masukan Nama Lengkap"
                  required
                  onChange={(e) => setnama_lengkap(e.target.value)}
                />
              </div>
              <div className="col-xl-5 col-md-6 col-lg-6">
                <label className="form-label">
                  Email <label className="star">*</label>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Masukan email anda"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-xl-5 col-md-6 col-lg-6">
                <label className="form-label">Jenis Bus</label>
                <select
                  id="inputState"
                  className="form-select"
                  name="Category"
                  onChange={(e) => setkategori(e.target.value)}
                >
                  <option selected>Pilihan Bus</option>
                  <option value="NARADATRANS MUSTANG KUNING">
                    NARADATRANS MUSTANG KUNING
                  </option>
                  <option value="NARADATRANS PARIWISATA BIRU-PUTIH">
                    NARADATRANS PARIWISATA BIRU-PUTIH
                  </option>
                  <option value="NARADATRANS MUHAASABAH VOYAGER HIJAU">
                    NARADATRANS MUHAASABAH VOYAGER HIJAU
                  </option>
                  <option value="NARADATRANS VELOCISTA BLUE">
                    NARADATRANS VELOCISTA BLUE
                  </option>
                  <option value="NARADATRANS MUHAASABAH VOYAGER HIJAU-SILVER">
                    NARADATRANS MUHAASABAH VOYAGER HIJAU-SILVER
                  </option>
                  <option value="NARADATRANS MUHAASABAH SILVER">
                    NARADATRANS MUHAASABAH SILVER
                  </option>
                  <option
                    value="NARADATRANS MUSTANG
"
                  >
                    NARADATRANS MUSTANG
                  </option>
                </select>
              </div>
              <div className="col-xl-5 col-md-6 col-lg-6">
                <label className="form-label">
                  No. Telepon <label className="star">*</label>
                </label>
                <div className="input-group">
                  <span className="input-group-text basic-addon1">+62</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukan nomor telepon"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                    onChange={(e) => setno_telepon(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xl-10 col-md-6 col-lg-6">
                <label className="form-label">
                  Pesan <label className="star">*</label>
                </label>
                <textarea
                  className="form-control"
                  name="Message"
                  aria-label="With textarea"
                  placeholder="Masukan pesan - pesan berupa kritik maupun saran untuk NaradaTrans . . . . . . "
                  onChange={(e) => setpesan(e.target.value)}
                ></textarea>
              </div>
              <div className="col-10 bot-content mb-5">
                <h4 className="text-brown">* Wajib diisi</h4>
                {user ? (
                  <button type="submit" className="btn btn-primary btn-kirim">
                    Kirim Pesan
                  </button>
                ) : (
                  <Link to={"/login"}>
                    <button type="submit" className="btn btn-primary btn-kirim">
                      Kirim Pesan
                    </button>
                  </Link>
                )}
              </div>
              <div className="col-12"></div>
            </form>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9948976308997!2d107.0145610738964!3d-6.264400061326131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698fab0fd4ce35%3A0xc32d4398228d9350!2sGarasi%20PO.NARADA%20TRANS!5e0!3m2!1sen!2sid!4v1700032090620!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Kontak;
