"use client"; // เพิ่มบรรทัดนี้ที่ด้านบนสุด

import { useEffect } from "react";
import Navbar from './component/navbar.js';

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require("bootstrap"); // โหลด bootstrap สำหรับ client-side
      const myCarousel = document.querySelector("#carouselExample");
      const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // ตั้งเวลาในการเปลี่ยนภาพ (3 วินาที)
        wrap: true, // ให้วนลูปเมื่อถึงภาพสุดท้าย
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div
          id="carouselExample"
          className="carousel slide p-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/carousel1.png"
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/carousel2.png"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/carousel3.png"
                className="d-block w-100"
                alt="Slide 3"
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

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card image-card" style={{ width: "100%" }}>
                <img
                  src="/img/BBGUNZONE_Ares_Kriss_vector_tan.jpg"
                  className="card-img-top"
                  alt="Card image cap"
                />
                <div className="card-body text-start">
                  <h5 className="card-title">Kriss Vector</h5>
                  <p className="card-text">Kriss Vector ระบบไฟฟ้า</p>
                  <div className="text-center">
                    <a href="#" className="btn btn-warning">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card image-card" style={{ width: "100%" }}>
                <img
                  src="/img/94uhf9.jpg"
                  className="card-img-top"
                  alt="Card image cap"
                />
                <div className="card-body text-start">
                  <h5 className="card-title">hi-capa 5.1k</h5>
                  <p className="card-text">สีดํา INFINITY (black) BB GUN</p>
                  <div className="text-center">
                    <a href="#" className="btn btn-warning">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card image-card" style={{ width: "100%" }}>
                <img
                  src="/img/vbdh1u.jpg"
                  className="card-img-top"
                  alt="Card image cap"
                />
                <div className="card-body text-start">
                  <h5 className="card-title">HK416</h5>
                  <p className="card-text">ระบบแก๊ส GBBR</p>
                  <div className="text-center">
                    <a href="#" className="btn btn-warning">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            About
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
    </footer>
  );
}
