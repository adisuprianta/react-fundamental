import HomeImage from '../../assets/images/landing_image.png';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container-sm">
        <div className="row">
          <div className="hero-text mt-5 col-lg-6 me-4">
            <h2 className="fs-1">Menyajikan</h2>
            <h2 className="fs-1 fw-bold text-primary">Kelezatan Terbaik</h2>
            <h2 className="fs-1 fw-bold">Untuk Pecinta Kuliner</h2>

            <p className="fs-6">
              Tersedia cita rasa yang lezat di setiap hidangan. Selamat datang
              di Warung Makan Bahari, tempat nikmati kelezatan!
            </p>
          </div>
          <div className="row d-flex align-items-center col-lg-6">
            <img src={HomeImage} alt="hero-image" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <form className="d-flex col-md-6 mt-5">
            <input
              type="text"
              className="form-control border border-primary-text rounded-0 rounded-start-2 align-self-center p-2"
              placeholder="Cari Makanan-mu disini!"
            />
            <button className="btn btn-primary fw-bold border border-primary-text rounded-start-0 w-25 align-self-center p-2">
              Cari
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
