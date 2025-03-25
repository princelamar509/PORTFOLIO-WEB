const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-heading">Madeus Rene</h3>
          <p>
            Front-end developer specializing in creating beautiful and functional web experiences.
            Based in Indianapolis, Indiana.
          </p>
          <div className="contact-info">
            <span><i className="footer-icon">📧</i> mrmadeus@.com</span>
            <span><i className="footer-icon">📱</i> +1 (317) 456-7890</span>
          </div>
          <div className="social-icons">
            <a href="https://github.com/princelamar509?tab=overview&from=2025-03-01&to=2025-03-23" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
            <a href="https://www.linkedin.com/in/madeus-rene-294196318/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
            <a href="https://twitter.com/madeusrene" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          </div>
        </div>

        <div className="footer-section links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-container">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3 className="footer-heading">Services</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Responsive Design</li>
            <li>Frontend Architecture</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3 className="footer-heading">Stay Updated</h3>
          <p>Subscribe to my newsletter for the latest updates and tech articles.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Madeus Rene. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;