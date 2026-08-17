import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Outpro<span>.India</span></h2>
          <p>
            Sports and adventure event management and sports consultancy
            organization.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>+91 89572 39847</p>
          <p>outpro.india@gmail.com</p>
          <p>Jaipur, Rajasthan, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Outpro.India. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;