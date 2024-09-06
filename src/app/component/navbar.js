import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          {/* Replace SVG with Image component or simple text */}
          <div className="d-inline-flex link-body-emphasis text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-ban" viewBox="0 0 16 16">
  <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
</svg>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link">Service</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
          </ul>
          <form className="d-flex me-2" role="search">
            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          <div>
            <Link href="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link href="/signup" className="btn btn-warning">Sign-up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}