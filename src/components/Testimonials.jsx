import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Bhagya Shree S",
      role: "Client",
      message:
        "A great experience from planning to execution. The team delivered everything professionally."
    },
    {
      name: "SBK Trading Co",
      role: "Business Partner",
      message:
        "Professional service, smooth execution and excellent communication throughout the project."
    },
    {
      name: "Arjun K",
      role: "Client",
      message:
        "The team understood our requirements and delivered a memorable experience."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        <p className="testimonials-subtitle">TESTIMONIALS</p>

        <h2>What Our Clients Say</h2>

        <p className="testimonials-description">
          Hear from the people and organisations we have worked with.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>

              <div className="quote">“</div>

              <p className="testimonial-message">
                {testimonial.message}
              </p>

              <h3>{testimonial.name}</h3>

              <span>{testimonial.role}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;