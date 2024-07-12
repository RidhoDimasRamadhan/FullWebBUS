import Whatsapp from "../../Components/buttonWA/Whatsapp";
import Footer from "../../Components/footer/footerLayout";
import Kontak from "../../Components/contact/kontak";

import GambarBadge1 from "/src/images/beranda/armadaBadge.png";
import GambarBadge2 from "/src/images/beranda/ruteBadge.png";
import GambarBadge3 from "/src/images/beranda/layananBadge.png";
import GambarBadge4 from "/src/images/beranda/hargaBadge.png";
import GambarBadgeSlide1 from "/src/images/beranda/BannerUtama.png";
import GambarBadgeSlide2 from "/src/images/beranda/bgBeranda.png";

import GambarArmada1 from "/src/images/beranda/busPutih.png";
import GambarArmada2 from "/src/images/beranda/busYellow.jpg";
import GambarArmada4 from "/src/images/beranda/bisUngu.png";
import GambarArmada5 from "/src/images/beranda/bisBiru2.png";
import GambarArmada6 from "/src/images/beranda/bisUngu2.png";

import Carousel from "react-bootstrap/Carousel";

import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "/src/css/mainPage.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function beranda() {
  return (
    <>
      <Whatsapp />
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel1">
          <img
            src={GambarBadgeSlide1}
            className="d-block w-100"
            alt="First slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <div className="container row col-lg-12 kalimat">
              <div className="col-xl-8 rounded-lg ">
                <div className="row mt-5">
                  <div className="col-12 ms-5 aww">
                    <div className="container FleksibelHomePage">
                      <p className="AboveWord">
                        Anda ingin berpergian dengan BUS ?
                      </p>
                      <div className="wordHomePage">
                        <p>
                          <span style={{ fontWeight: "bolder" }}>
                            NaradaTrans{" "}
                          </span>
                          Pilihan Terbaik <br />
                          Untuk Anda
                        </p>
                      </div>
                    </div>
                    <div className="pesan">
                      <p className="deliver">
                        <a href="https://wa.me/+6285281595005" target="_blank">
                          Pesan Sekarang
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={GambarBadgeSlide2}
            alt="Second slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <div className="container row col-lg-12 kalimat">
              <div className="col-xl-8 rounded-lg ">
                <div className="row mt-5">
                  <div className="col-12 ms-5 aww">
                    <div className="container FleksibelHomePage">
                      <p className="AboveWord">
                        Anda ingin berpergian dengan BUS ?
                      </p>
                      <div className="wordHomePage">
                        <p>
                          <span style={{ fontWeight: "bolder" }}>
                            NaradaTrans{" "}
                          </span>
                          Pilihan Terbaik <br />
                          Untuk Anda
                        </p>
                      </div>
                    </div>
                    <div className="pesan">
                      <p className="deliver">
                        <a href="https://wa.me/+6285281595005" target="_blank">
                          Pesan Sekarang
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="d-flex justify-content-center justify-content-lg-between section">
        <div className="container-fluid text-md-start">
          <div className="bg-Grey py-2">
            <h1 className="text-sm-start text-md-center text-lg-center text-xl-center profile-title fw-bold text-black">
              Mengapa Harus <br />
              menggunakan
              <span className="naradaText"> NaradaTrans ?</span>
            </h1>
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-7 col-xl-3">
                  <div className="mx-5 img">
                    <img src={GambarBadge1} alt="Armada Narada" />
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="title-card">Armada Modern </h4>
                    <p className="descProfile px-2 px-lg-5">
                      Armada modern dan nyaman dengan fasilitas AC, WiFi, TV,
                      dan keamanan terkini.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-lg-4 col-xl-3">
                  <div className="mx-5 img">
                    <img src={GambarBadge2} alt="Armada Modern" />
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="title-card">Rute Luas</h4>
                    <p className="descProfile px-3">
                      Rute luas, fleksibel, dan sesuai berbagai kebutuhan
                      pelanggan.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-lg-7 col-xl-3">
                  <div className="mx-5 img">
                    <img src={GambarBadge3} alt="Layanan Narada" />
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="title-card">Layanan Profesional</h4>
                    <p className="descProfile px-3">
                      Layanan pelanggan ramah, responsif, dan berpengetahuan
                      untuk pengalaman pelanggan positif.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-lg-4 col-xl-3">
                  <div className="mx-5 img">
                    <img src={GambarBadge4} alt="Harga Narada" />
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="title-card">Harga Dapat disesuaikan</h4>
                    <p className="descProfile px-1">
                      Layanan khusus dengan penyesuaian perjalanan sesuai
                      kebutuhan pelanggan, nilai tambah yang signifikan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1
        className="text-sm-start text-md-center text-lg-center text-xl-center profile-title fw-bold text-black"
        style={{ fontSize: "50px" }}
      >
        Armada<span className="naradaText"> Kami</span>
      </h1>

      <Carousel2 responsive={responsive} draggable={true} className="carousel3">
        <div className="caraousel3Luar">
          <img src={GambarArmada1} alt="Layanan Narada" className="carousel2" />
        </div>
        <div className="caraousel3Luar">
          <img src={GambarArmada2} alt="Layanan Narada" className="carousel2" />
        </div>
        <div className="caraousel3Luar">
          <img src={GambarArmada4} alt="Layanan Narada" className="carousel2" />
        </div>
        <div className="caraousel3Luar">
          <img src={GambarArmada5} alt="Layanan Narada" className="carousel2" />
        </div>
        <div className="caraousel3Luar">
          <img src={GambarArmada6} alt="Layanan Narada" className="carousel2" />
        </div>
      </Carousel2>

      <Kontak />
      <Footer />
    </>
  );
}

export default beranda;
