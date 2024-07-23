import Footer from "../../Components/footer/footerLayout";
import Kontak from "../../Components/contact/kontak";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
import { useEffect, useState } from "react";
import "/src/css/halaman_galeri.css";
import axios from "axios";

function Galeri() {
  const [gambar, setGambar] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:2000/images")
      .then((result) => setGambar(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Whatsapp />
      <br />
      <br />
      <br />
      <div className="container-fluid text-md-start">
        <div className="galeri-headline mt-4">
          <h3>Galeri Kami</h3>
          <h1 className="mx-auto ">
            Galeri <span className="text-brown">Foto </span>Kami NaradaTrans
          </h1>
        </div>


        <div className="container mt-5">
          <div className="gallery">
            <div className="gallery-item ">
              {gambar &&
                gambar.map((data) => (
                  <tr key={data._id}>
                    <td>
                      <img
                        src={"http://localhost:2000/images/" + data.Photo}
                        alt="img"
                        className="galeri-img"
                      />
                    </td>
                  </tr>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <button type="button" className="d-block mx-auto btn-load">Load More</button> */}

      <Kontak />
      <Footer />
    </>
  );
}
export default Galeri;
