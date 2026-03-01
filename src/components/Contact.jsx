import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);


    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(
        () => {
          setLoading(false);
          setPopup(true);
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setPopup(false);
          }, 3000);
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="main-header">Contact Me</h1>

      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <ul className="contact-details">
            <li>
              <i className="bi bi-envelope"></i>
              <a href="mailto:aditikumawat14@gmail.com">
                aditikumawat14@gmail.com
              </a>
            </li>

            <li>
              <i className="bi bi-geo-alt"></i>
              <span>India</span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>
                Failed to send message. Try again.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {popup && (
        <div className="success-popup">
          Message Sent Successfully 🎉
        </div>
      )}
    </section>
  );
}

export default Contact;