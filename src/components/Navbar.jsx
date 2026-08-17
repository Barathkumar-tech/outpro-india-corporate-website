import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          Outpro<span>.India</span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;