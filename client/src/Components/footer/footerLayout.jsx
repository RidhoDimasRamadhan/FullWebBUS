import Gambar1 from "/src/images/footer/Logo.png";
import Gambar2 from "/src/images/footer/phoneIco.png";
import Gambar3 from "/src/images/footer/mailIco.png";
import Gambar4 from "/src/images/footer/webIco.png";
import Gambar6 from "/src/images/footer/Twiter.png";
import Gambar5 from "/src/images/footer/Fb.png";
import Gambar7 from "/src/images/footer/igIco.png";

import {Context} from "/src/userContext";
import {useContext} from "react";

function Footer() {
  const {user} = useContext(Context);
  return (
    <>
      {user ? (
        <footer className="text-lg-start bg-footer text-muted">
          <section className="p-4 d-flex justify-content-center justify-content-lg-between">
            <div className="container-fluid text-md-start mt-5">
              <div className="row mt-lg-3 mt-sm-1">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-lg-auto mb-4">
                  <img src={Gambar1} alt="Logo" className="logo" />
                  <div className="address">
                    <h6 className="fw-bold text-white mt-4">
                      Pool Bus dan Kantor Pusat
                    </h6>
                    <p className="text-white pe-sm-5">
                      Jl. Jatimulya Raya No.1, Jatimulya, Kec. Tambun Selatan,
                      Kota Bekasi, Jawa Barat 17510
                    </p>
                  </div>

                  <div className="contact mb-4">
                    <div className="d-inline-block">
                      <p className="text-white">
                        <img src={Gambar2} alt="" className="bg-light ico" />
                        085311301830
                      </p>
                    </div>

                    <div className="mail">
                      <p className="text-white">
                        <img src={Gambar3} alt="" className="bg-light ico" />
                        naradatrans.business@gmail.com
                      </p>
                    </div>

                    <div className="">
                      <p className="text-white">
                        <img src={Gambar4} alt="" className="bg-light ico" />
                        naradatrans.com
                      </p>
                    </div>
                  </div>

                  <div className="d-flex gap-4">
                    <div className="">
                      <img
                        src={Gambar5}
                        alt=""
                        className="bg-light socialIco"
                      />
                    </div>
                    <div>
                      <img
                        src={Gambar6}
                        alt=""
                        className="bg-light socialIco"
                      />
                    </div>
                    <div>
                      <img src={Gambar7} alt="" className="bg-light IGIco" />
                    </div>
                  </div>

                  <div className="mt-4 text-light copyright">
                    <p>© 2023 Team NaradaTrans, All Rights Reserved</p>
                  </div>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-white mb-4">Menu Utama</h6>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/" className="text-white pb-3">
                      Beranda
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/profile" className="text-white pb-3">
                      Profile
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/armada" className="text-white pb-3">
                      Armada
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/galeri" className="text-white pb-3">
                      Galeri
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/harga" className="text-white pb-3">
                      Harga
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/hasil_order/:id" className="text-white pb-3">
                      Pesanan
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/kontak" className="text-white pb-3">
                      Kontak
                    </a>
                  </div>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-white mb-4">Jam Operasional</h6>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3">
                    <span className="text-white pb-3">Senin - Jumat :</span>
                    <span className="text-white">09.00 pm - 13.00 pm</span>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3">
                    <span className="text-white pb-3 me-md-2">Sabtu:</span>
                    <span className="text-white">09.00 pm - 13.00 pm</span>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3">
                    <span className="text-white pb-3 me-md-2">Minggu :</span>
                    <div className="libur">
                      <span className="text-white">Libur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      ) : (
        <footer className="text-lg-start bg-footer text-muted">
          <section className="p-4 d-flex justify-content-center justify-content-lg-between">
            <div className="container-fluid text-md-start mt-5">
              <div className="row mt-lg-3 mt-sm-1">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-lg-auto mb-4">
                  <img src={Gambar1} alt="Logo" className="logo" />
                  <div className="address">
                    <h6 className="fw-bold text-white mt-4">
                      Pool Bus dan Kantor Pusat
                    </h6>
                    <p className="text-white pe-sm-5">
                      Jl. Jatimulya Raya No.1, Jatimulya, Kec. Tambun Selatan,
                      Kota Bekasi, Jawa Barat 17510
                    </p>
                  </div>

                  <div className="contact mb-4">
                    <div className="d-inline-block">
                      <p className="text-white">
                        <img src={Gambar2} alt="" className="bg-light ico" />
                        085311301830
                      </p>
                    </div>

                    <div className="mail">
                      <p className="text-white">
                        <img src={Gambar3} alt="" className="bg-light ico" />
                        naradatrans.business@gmail.com
                      </p>
                    </div>

                    <div className="">
                      <p className="text-white">
                        <img src={Gambar4} alt="" className="bg-light ico" />
                        naradatrans.com
                      </p>
                    </div>
                  </div>

                  <div className="d-flex gap-4">
                    <div className="">
                      <img
                        src={Gambar5}
                        alt=""
                        className="bg-light socialIco"
                      />
                    </div>
                    <div>
                      <img
                        src={Gambar6}
                        alt=""
                        className="bg-light socialIco"
                      />
                    </div>
                    <div>
                      <img src={Gambar7} alt="" className="bg-light IGIco" />
                    </div>
                  </div>

                  <div className="mt-4 text-light copyright">
                    <p>© 2023 Team NaradaTrans, All Rights Reserved</p>
                  </div>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-white mb-4">Menu Utama</h6>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/" className="text-white pb-3">
                      Beranda
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/profile" className="text-white pb-3">
                      Profile
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/armada" className="text-white pb-3">
                      Armada
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/galeri" className="text-white pb-3">
                      Galeri
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/harga" className="text-white pb-3">
                      Harga
                    </a>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3 line">
                    <a href="/kontak" className="text-white pb-3">
                      Kontak
                    </a>
                  </div>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-white mb-4">Jam Operasional</h6>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3">
                    <span className="text-white pb-3">Senin - Jumat :</span>
                    <span className="text-white">09.00 pm - 13.00 pm</span>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3">
                    <span className="text-white pb-3 me-md-2">Sabtu:</span>
                    <span className="text-white">09.00 pm - 13.00 pm</span>
                  </div>
                  <div className="d-flex justify-content-lg-between border-bottom mb-3">
                    <span className="text-white pb-3 me-md-2">Minggu :</span>
                    <div className="libur">
                      <span className="text-white">Libur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      )}
    </>
  );
}

export default Footer;
