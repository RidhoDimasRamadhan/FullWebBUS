import "bootstrap/dist/css/bootstrap.min.css";
import "/src/css/profile.css";
import Gambar1 from "/src/images/profile/img1.png";
import Gambar2 from "/src/images/profile/img2.png";
import Gambar3 from "/src/images/profile/img3.png";

import SectionKontak from "/src/Components/contact/kontak.jsx";
import Footer from "/src/Components/footer/footerLayout.jsx";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
function profile() {
  return (
    <>
      <Whatsapp />
      <section className="d-flex justify-content-center justify-content-lg-between section">
        <div className="container-fluid text-md-start bg-Grey">
          <img src={Gambar1} alt="img" className="img-profile" />
          <div className="article-left sejarah">
            <h3>Profil PO NaradaTrans</h3>
            <h2 className="h2Profile">
              <span className="text-brown">Sejarah</span> NaradaTrans
            </h2>
            <p className="pt-3 ">
              NaradaTrans adalah perusahaan otobis yang khusus melayani
              pariwisata dan antar jemput karyawan dalam negeri. NaradaTrans
              didirikan pada tahun 2004 di Jakarta.
            </p>
            <p>
              Semua armada NaradaTrans menggunakan armada bis MERCEDES BENZ (Big
              Bus), Bus Medium (Mitsubishi) yang sudah terkenal akan standar
              kenyamanan dan keamanannya di bidang otomotif. Selain itu, kami
              juga menyediakan Mini Bus 15 seats menggunakan kendaraan seperti
              Isuzu Elf dan Toyota Commuter.
            </p>
            <p>
              Seiring dengan berjalannya waktu, NaradaTrans telah banyak
              melayani perusahaan-perusahaan swasta lokal dan asing, BUMN,
              sekolah-sekolah swasta, negeri maupun internasional,
              yayasan-yayasan sosial, dan acara-acara keluarga seperti
              perkawinan dan mudik.
            </p>
            <p>
              Komitmen NaradaTrans adalah memberikan layanan transportasi yang
              handal, nyaman, dan aman bagi setiap pelanggan kami. Dengan armada
              yang terjamin kualitasnya, kami siap memberikan pengalaman
              perjalanan yang memuaskan dan mengantarkan Anda dengan tepat waktu
              ke tujuan.
            </p>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center justify-content-lg-between">
        <div className="container-fluid text-md-start">
          <div className="d-xl-flex justify-content-lg-between">
            <div className="article-img">
              <img src={Gambar2} alt="img" />
              <img src={Gambar3} alt="img" />
            </div>
            <div className="article-right layanan">
              <h3>Layanan Kami</h3>
              <h2>
                Kenyamanan, Keselamatan{" "}
                <span className="text-brown">Penumpang Prioritas Kami</span>
              </h2>
              <p className="pt-3">
                NaradaTrans menawarkan perjalanan yang nyaman dengan armada bis
                yang dilengkapi AC, DVD, LCD (TV layar datar), karaoke, dan
                reclining seats. Kami menjadi pionir{" "}
                <span className="text-brown" style={{fontWeight:"bolder"}}>BUS THEATRE</span> di Indonesia,
                menghadirkan hiburan selama perjalanan. Keselamatan penumpang
                adalah prioritas utama kami, dengan setiap armada dilengkapi
                palu pemecah kaca, pintu darurat, dan tabung pemadam kebakaran.
                Pengemudi berpengalaman di bidang pariwisata menjamin kenyamanan
                dan keselamatan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {<SectionKontak />}
      {<Footer />}
    </>
  );
}

export default profile;
