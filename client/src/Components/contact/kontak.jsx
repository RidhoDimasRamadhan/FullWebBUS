import "/src/css/mainPage.css";
import Gambar1 from "/src/images/kontak/img4.png";

function Kontak() {
  return (
    <>
      <section className="d-flex justify-content-center justify-content-lg-between section">
        <div className="container-fluid text-md-start">
          <div className="ribbon mx-auto mb-5">
            <div className="d-lg-flex d-sm-block justify-content-between">
              <div className="">
                <img src={Gambar1} alt="img" className="img-ribbon" />
              </div>
              <div className="text-white text-ribbon">
                <h3 className="fw-bold">Anda Tertarik?</h3>
                <p className="">SILAHKAN HUBUNGIN KAMI</p>
              </div>
              <div className="btn-ribbon d-lg-flex gap-lg-4">
                <a href="https://wa.me/+6285281595005">
                  <button type="button" className="btn-kontak text-white text-align-center">
                    Kontak
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Kontak;
