import Gambar1 from "/src/images/kontak/peta.png"
import "/src/css/kontak.css"
import Footer from "/src/Components/footer/footerLayout.jsx";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
function Kontak(){
    return(
<>
<Whatsapp/>
<section className="d-flex justify-content-center justify-content-lg-between section">
    <div className="container-fluid text-md-star section-kontak">
        <img src={Gambar1} alt="" className="img-peta"/>
        <div className="headline-kontak mb-5">
            <h2>Informasi <span className="text-brown">Kontak</span> Kami</h2>
            <p>Punya pertanyaan terkait produk dan layanan NARADATRANS? Tim kami siap membantu Anda.</p>
        </div>
        <div className="d-xl-flex d-sm-block"> 
            <form className="row g-3" action="https://formsubmit.co/your@email.com" method="POST">
                <div className="col-xl-5 col-md-6 col-lg-6">
                    <label className="form-label">Nama Lengkap <label className="star">*</label></label>
                    <input type="text" name="Fullname" className="form-control" id="inputEmail4" placeholder="Masukan Nama Lengkap" required/>
                </div>
                <div className="col-xl-5 col-md-6 col-lg-6">
                    <label  className="form-label">Email <label className="star">*</label></label>
                    <input type="text" className="form-control" name="Email" id="inputPassword4" placeholder="Masukan email anda" required/>
                </div>
                <div className="col-xl-5 col-md-6 col-lg-6">
                    <label  className="form-label">Kategori</label>
                    <select id="inputState" className="form-select" name="Category">
                        <option selected>Pilih Kategori</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-xl-5 col-md-6 col-lg-6">
                    <label  className="form-label">No. Telepon <label className="star">*</label></label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">+62</span>
                        <input type="text" className="form-control" name="Phone" id="inputPassword4" placeholder="Masukan nomor telepon" aria-label="Username" aria-describedby="basic-addon1" required/>
                    </div>
                </div>
                <div className="col-xl-10 col-md-6 col-lg-6">
                    <label  className="form-label">Pesan <label className="star">*</label></label>
                    <textarea className="form-control" name="Message" aria-label="With textarea" placeholder="Masukan Nama Lengkap"></textarea>
                </div>
                <div className="col-10 bot-content mb-5">
                    <h4 className="text-brown">* Wajib diisi</h4>
                    <button type="submit" className="btn btn-primary btn-kirim">Kirim Pesan</button>
                </div>
                 <div className="col-12">
                </div> 
            </form>
            <div className="map">    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9948976308997!2d107.0145610738964!3d-6.264400061326131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698fab0fd4ce35%3A0xc32d4398228d9350!2sGarasi%20PO.NARADA%20TRANS!5e0!3m2!1sen!2sid!4v1700032090620!5m2!1sen!2sid" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>

<Footer/>

</>
    );
}

export default Kontak