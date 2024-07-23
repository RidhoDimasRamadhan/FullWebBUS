import Footer from "../../Components/footer/footerLayout";
import Kontak from "../../Components/contact/kontak";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Armada() {
  const [modalShow, setModalShow] = React.useState(false);

  const [gambar_bis, setgambar_bis] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/armada")
      .then((result) => setgambar_bis(result.data))
      .catch((err) => console.log(err));
  }, []);

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
              <tr>
                <td>
                  {gambar_bis &&
                    gambar_bis.map((data) => (
                      <tr key={data._id}>
                        <td>
                          <Link onClick={() => setModalShow(true)} k>
                            <img
                              src={data.gambar_bis} // {{ URL: data.gambar_bis }}
                              // src={data.gambar_bis}
                              className="galeri-img"
                              alt="img"
                            />
                          </Link>
                        </td>
                      </tr>
                    ))}
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Kontak />
      <Footer />
    </>
  );
}
export default Armada;
