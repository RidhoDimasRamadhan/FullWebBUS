// src/Modal.js
import React from "react";
import "/src/css/modal2.css";

const Modal = ({ activeModal, closeModal, data }) => {
  if (!activeModal) return null;

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        {data ? (
          <>
            <h2>{data.nama_bis}</h2>
            <h2>{data.bahan_bakar}</h2>
            <h2>
              <img
                src={data.gambar_bis}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </h2>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Modal;


// <div className="row">
//   <div className="col-6 gambar">
//     <img
//       src="{{ URL('images/armada/img1.png') }}"
//       className="img-fluid"
//       alt="Responsive image"
//     />
//   </div>
//   <div className="col-6">
//     <div className="row">
//       <div className="col-12">
//         <div className="container kalimatModal">
//           <h1>
//             NARADATRANS <span style="font-weight: bolder;">PARIWISATA</span>{" "}
//             BIRU-PUTIH
//           </h1>
//         </div>
//       </div>
//     </div>
//     <div className="row pesanModal">
//       <a href="https://wa.me/+6285281595005" target="_blank">
//         <div className="col-12">Pesan Sekarang</div>
//       </a>
//     </div>
//     <div className="row">
//       <div className="col-6">
//         <div className="row mt-3">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/Kursi.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>TEMPAT DUDUK</p>
//             <p className="keterangan">31</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/Diesel.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>Bahan Bakar</p>
//             <p className="keterangan">DIESEL</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/Wifi.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>WIFI & YOUTUBE</p>
//             <p className="keterangan">YA</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/SelimutBantal.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>SELIMUT & BANTAL</p>
//             <p className="keterangan">YA</p>
//           </div>
//         </div>
//       </div>

//       <div className="col-6">
//         <div className="row mt-3">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/Bagasi.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>BAGASI</p>
//             <p className="keterangan">5</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/AcDingin.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>AC DINGIN</p>
//             <p className="keterangan">YA</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/Karaoke.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>KARAOKE</p>
//             <p className="keterangan">YA</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-3">
//             <img
//               src="{{ URL('images/modal/Pengemudi.svg') }}"
//               className="img-fluid"
//               alt="Responsive image"
//             />
//           </div>
//           <div className="col-9">
//             <p>PENGEMUDI</p>
//             <p className="keterangan">YA</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;