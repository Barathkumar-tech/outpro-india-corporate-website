import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Project One",
      category: "Sports & Adventure",
      description:
        "A professionally planned and executed event experience.",
      image: "https://images.pexels.com/photos/35887578/pexels-photo-35887578.jpeg"
    },
    {
      title: "Project Two",
      category: "Brand Activation",
      description:
        "An engaging brand activation designed to connect with audiences.",
      image: "https://www.bizzabo.com/wp-content/cache/seraphinite-accelerator/s/m/d/img/b82b07ae28c5c54862c9b0cabc5105ab.1c2900.png"
    },
    {
      title: "Project Three",
      category: "Corporate Event",
      description:
        "A memorable corporate event delivered with professional execution.",
      image: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg"
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">

        <p className="portfolio-subtitle">OUR WORK</p>

        <h2>Featured Projects</h2>

        <p className="portfolio-description">
          Explore some of our selected projects and event experiences.
        </p>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card" key={project.title}>

              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="portfolio-content">
                <p className="portfolio-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact">View Project →</a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;