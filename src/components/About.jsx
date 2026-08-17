import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="about-label">WHO WE ARE</p>
          <h2>
            About <span>Outpro.India</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              Turning sporting ideas into experiences.
            </h3>

            <p>
              Outpro.India is an event management and sports consultancy
              organization specializing in sports tournaments, adventure
              challenges, corporate sports leagues, and institutional fests.
            </p>

            <p>
              Built from a community of athletes and organizers with roots
              in Jaipur, we deliver end-to-end event execution, athlete
              management, and brand amplification for sporting events.
            </p>
          </div>

          <div className="about-highlights">

            <div className="about-card">
              <div className="about-number">01</div>
              <div>
                <h4>Sports Event Management</h4>
                <p>
                  From grassroots tournaments and football cups to corporate
                  sports days and institutional fests, we manage events from
                  concept to final whistle.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-number">02</div>
              <div>
                <h4>Community & Social Initiatives</h4>
                <p>
                  We create meaningful community-driven sporting experiences
                  through initiatives like Udaan, in collaboration with care
                  homes and NGOs.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-number">03</div>
              <div>
                <h4>Brand & Talent Ecosystems</h4>
                <p>
                  We connect brands, educational platforms, student
                  communities, and corporate organizations through
                  sponsorships, internships, partnerships, and activations.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;