import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaSyncAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="navbar-content">
        <div className="logo-container">
        <a href="#home" className="logo" onClick={handleLinkClick}>
        <span className="logo-text">
  <span className="logo-letter">M</span>
  <span className="logo-letter">A</span>
  <span className="logo-letter">D</span>
  <span className="logo-letter">E</span>
  <span className="logo-letter">U</span>
  <span className="logo-letter">S</span>
  <span className="logo-letter">R</span>
  <span className="logo-letter">E</span>
  <span className="logo-letter">N</span>
  <span className="logo-letter">E</span>
</span>

</a>
        </div>
        
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
          
          <div className="nav-buttons">
            <div className="social-nav">
              <a href="https://github.com/princelamar509?tab=overview&from=2025-03-01&to=2025-03-23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={25} />
              </a>
              <a href="https://www.linkedin.com/in/madeus-rene-294196318/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={25} />
              </a>
              <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={25} />
              </a>
            </div>

      
          </div>
        </nav>
        
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes size={34} /> : windowWidth <= 900 ? <FaBars size={34} /> : <FaSyncAlt size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;