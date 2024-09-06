import Navbar from './component/navbar.js';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div
          id="carouselExample"
          className="carousel slide p-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/carousel1.jpg"
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/carousel2.jpg"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "100%" }}>
        <img src="/img/BBGUNZONE_Ares_Kriss_vector_tan.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick your need</p>
          <a href="#" className="btn btn-primary">Go to my room</a>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "100%" }}>
        <img src="/img/94uhf9.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick your need</p>
          <a href="#" className="btn btn-primary">Go to my room</a>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "100%" }}>
        <img src="/img/vbdh1u.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick your need</p>
          <a href="#" className="btn btn-primary">Go to my room</a>
        </div>
      </div>
    </div>
  </div>
  <footer className="py-3 my-4">
  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">Features</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">Pricing</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">FAQs</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">About</a>
    </li>
  </ul>
  <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
</footer>

      </div>
    </>
  );
}