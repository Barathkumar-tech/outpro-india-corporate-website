import "./Services.css";

function Services() {
  const services = [
    {
      title: "Digital Strategy & Consulting",
      description: "We help businesses plan and build effective digital strategies aligned with their goals."
    },
    {
      title: "Web & Digital Solutions",
      description: "We create professional, responsive and user-focused digital experiences for businesses."
    },
    {
      title: "Digital Marketing & Growth",
      description: "We provide digital solutions focused on improving online visibility, engagement and growth."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <p className="section-subtitle">OUR SERVICES</p>

        <h2>What We Offer</h2>

        <p className="section-description">
          Explore our range of professional services.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;