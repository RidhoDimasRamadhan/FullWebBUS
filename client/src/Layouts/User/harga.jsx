import "/src/css/harga.css";
import Footer from "/src/Components/footer/footerLayout.jsx";
import Whatsapp from "../../Components/buttonWA/Whatsapp";
import Danger from "../../Components/buttonWA/danger";
function Harga() {
  return (
    <>
      <Whatsapp />
      <div className="container mb-5 kalimatHarga">
        <h1>Berikut Daftar</h1>
        <h1>
          <span style={{ color: "#AB3C16" }}>Harga</span> yang kami <br />
          tawarkan
        </h1>
      </div>
      <div className="container mt-5 mb-5 ">
        <table className="table">
          <thead>
            <tr className="tujuan">
              <th scope="col" className="tujuan">
                TUJUAN
              </th>
              <th scope="col" className="harga">
                HARGA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-white">
              <td scope="row" className="RataKiri">
                Transfer dalam Kota Jakarta,Drop Bandara (One Way 4 Jam)
              </td>
              <td>Rp. 1.600.000</td>
            </tr>

            <tr className="table-dark">
              <td scope="row" className="RataKiri">
                Tour dalam kota (Half day 8 Jam)
              </td>
              <td>Rp. 1.800.000</td>
            </tr>

            <tr className="table-white">
              <td scope="row" className="RataKiri">
                Tour dalam kota (Full day 12 Jam)
              </td>
              <td>Rp. 1.850.000</td>
            </tr>

            <tr className="table-dark">
              <td scope="row" className="RataKiri">
                Mekarsari, Sentul, CIbubur, Karawaci, Tanggerang (12 Jam)
              </td>
              <td>Rp. 2.050.000</td>
            </tr>

            <tr className="table-white">
              <td scope="row" className="RataKiri">
                Bogor, Citereup, Pasir Mukti, Ciluengsi, Cikupa, Balaraja,
                Cikokol, Cikarang, tde Jungle, Jungle Land, Ciseeng (12 Jam)
              </td>
              <td>Rp. 2.050.000</td>
            </tr>

            <tr className="table-dark">
              <td scope="row" className="RataKiri">
                Taman Safari, Cilember, Lido, Cisarua, TWM, Cimori, Mega
                Mendung, Gunug Mas, Cinangneng, Cimelati, Leuwiliang, Ciawi,
                Karawang, Tapos, Curug Nangka, Highland (15 jam)
              </td>
              <td>Rp. 2.200.000</td>
            </tr>
            <tr className="table-white">
              <td scope="row" className="RataKiri">
                Cipanas, Gunung Geulis, Cibodas, Ciloto, Salabintana, Cimacan,
                Sukabumi, Jatiluhur, Gunung Salak, Purwakarta, Cikampek,
                Quiling/Jonggol (15 jam)
              </td>
              <td>Rp. 2.400.000</td>
            </tr>
            <tr className="table-dark">
              <td scope="row" className="RataKiri">
                Pulorida, Ziarah Banten, Cilegon, Merak, Serang, Carita, Anyer,
                Karang Bolong (18 Jam)
              </td>
              <td>Rp. 2.400.000</td>
            </tr>
            <tr className="table-white">
              <td scope="row" className="RataKiri">
                Bandung Kota, Pandeglang, Maribaya, Cigundul, Ciater, Lemabang,
                TSB, Tangkuban Perahu, Subang, Indramayu, Tanjung Lesung, Banten
                Labuan, Citatih, Pelabuhan Ratu, Citarik, Cianjur (18 jam)
              </td>
              <td>Rp. 2.700.000</td>
            </tr>
            <tr className="table-dark">
              <td scope="row" className="RataKiri">
                Jatinagor, Ciwidey, Kawah Putih, Sumedang, Situ Patenggang,
                Cileunyi, Pangalengan (18 jam)
              </td>
              <td>Rp. 2.850.000</td>
            </tr>
            <tr className="table-white">
              <td scope="row" className="RataKiri">
                Cirebon, Majalengka, Kuningan, Sawarna, Tasikmalaya, Suralaya,
                Ujung Genteng (18 jam)
              </td>
              <td>Rp. 3.100.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container alert">
        <div className="col-12">
          <div className="row">
            <div className="col-1">
              <i>{<Danger />}</i>
            </div>
            <div className="col-11 danger">
              Daftar harga sewa bus sewaktu-waktu dapat berubah, hubungi kami
              untuk bernegosiasi dan detail harganya.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Harga;