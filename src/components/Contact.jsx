import "./Contact.css";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.elements[0].value.trim(),
      email: form.elements[1].value.trim(),
      phone: form.elements[2].value.trim(),
      message: form.elements[3].value.trim(),
    };

    const button = form.querySelector("button");

    try {
      // Disable button while submitting
      button.disabled = true;
      button.textContent = "Sending...";

      const response = await fetch("https://outpro-india-backend-2pbr.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! Your enquiry has been submitted successfully.");
        form.reset();
      } else {
        alert("Unable to submit your enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      // Restore button
      button.disabled = false;
      button.textContent = "Send Enquiry →";
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="contact-subtitle">GET IN TOUCH</p>

          <h2>Let's Work Together</h2>

          <p>
            Have an event, project, or partnership idea? Get in touch with
            Outpro.India and let's create something impactful together.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Contact Us</h3>

            <p>
              <strong>Phone</strong><br />
              +91 89572 39847
            </p>

            <p>
              <strong>Email</strong><br />
              outpro.india@gmail.com
            </p>

            <p>
              <strong>Location</strong><br />
              Jaipur, Rajasthan, India
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project or event..."
                required
              ></textarea>
            </div>

            <button type="submit">Send Enquiry →</button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;