import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom p-3 text-bg-dark">
      <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
        <a
          href="/page.js"
          className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-ban-fill me-2"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z" />
          </svg>
          <span className="navbar-brand-text h4 mb-0 text-white">
            BBGUN<sup>Shop</sup>
          </span>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link icon-link px-2 link-warning">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-secondary">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-secondary">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-secondary">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-secondary">
            About
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-warning me-2">
          Login
        </button>
        <button type="button" className="btn btn-warning">
          Sign-up
        </button>
      </div>
    </header>
  );
}