import Footer from "../../Components/footer/footerLayout";
import Kontak from "../../Components/contact/kontak";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Modal from "/src/Layouts/User/pesanan.jsx";
import "/src/css/halaman_galeri.css";

function Armada() {
  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [gambar_bis, setgambar_bis] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/armada")
      .then((result) => setgambar_bis(result.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchModalData = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/detail_armada/${id}`);
      const data = await response.json();
      setModalData({
        _id: data._id,
        nama_bis: data.nama_bis,
        gambar_bis: data.gambar_bis,
        tempat_duduk: data.tempat_duduk,
        bahan_bakar: data.bahan_bakar,
        wifi_youtube: data.wifi_youtube,
        selimut_bantal: data.selimut_bantal,
        ac: data.ac,
        karaoke: data.karaoke,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const openModal = (id) => {
    setActiveModal(id);
    fetchModalData(id);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };
  return (
    <>
      <Whatsapp />
      <br />
      <br />
      <br />
      <div className="container-fluid text-md-start mt-3">
        <div className="armada-headline">
          <h1 className="mx-auto">
            PILIHAN <span className="text-brown">ARMADA</span> UNTUK ANDA
          </h1>
        </div>
        <div className="container mt-5">
          <div className="gallery">
            <div className="gallery-item ">
              {gambar_bis &&
                gambar_bis.map((data) => (
                  <tr key={data._id}>
                    <td className="galeri">
                      <Link onClick={() => openModal(data._id)} k>
                        <img
                          src={data.gambar_bis} // {{ URL: data.gambar_bis }}
                          // src={data.gambar_bis}
                          className="galeri-img"
                          alt="img"
                        />
                      <div className="text-overlay">Detail Bus <br />
                      & <br />
                      Pesan Sekarang</div>
                      </Link>
                    </td>
                  </tr>
                ))}
            </div>
          </div>
        </div>
        <Modal
          activeModal={activeModal}
          closeModal={closeModal}
          data={modalData}
        />
      </div>

      <Kontak />
      <Footer />
    </>
  );
}
export default Armada;
