import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO OUTPRO.INDIA</p>

        <h1>
          Transforming Ideas Into
          <span> Digital Experiences</span>
        </h1>

        <p className="hero-description">
          We create innovative digital solutions that help businesses
          grow, connect and succeed.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="primary-btn">
            Explore Our Services
          </a>

          <a href="#portfolio" className="secondary-btn">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;