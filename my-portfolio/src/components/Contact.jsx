const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">📧</div>
            <div className="detail">
              <h3>Email</h3>
              <p>mrmadeus@.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">📱</div>
            <div className="detail">
              <h3>Phone</h3>
              <p>+1 (317) 456-7890</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">📍</div>
            <div className="detail">
              <h3>Location</h3>
              <p>Indianapolis, Indiana</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">💼</div>
            <div className="detail">
              <h3>Work Status</h3>
              <p>Available for freelance</p>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <h3>Send Me a Message</h3>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/madeus-rene-294196318/?trk=opento_sprofile_details" className="social-link">LinkedIn</a>
        <a href="https://github.com/princelamar509?tab=overview&from=2025-03-01&to=2025-03-24" className="social-link">GitHub</a>
        <a href="#" className="social-link">Twitter</a>
        <a href="#" className="social-link">Instagram</a>
      </div>
    </section>
  );
};

export default Contact;