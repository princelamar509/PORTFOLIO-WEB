


const Hero = () => {
{/*handle both button */}
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <section id="home">
      <div className="hero-background">
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Welcome to my portfolio</p>
          <h1 className="hero-heading"> 
            <span className="highlight">Hi,</span> I'm Madeus Rene 👋
          </h1>
          <p className="hero-title">Front-End Developer</p>
          <p className="info">
            I craft beautiful and responsive web experiences with modern technologies.
            Specializing in React/Native, JavaScript, and UI/UX design principles to create
            engaging digital solutions that drive business growth.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
          
          <div className="hero-cta">
      
            <button className="hero-btn primary" onClick={()=> handleClick("projects")} >View Projects</button>
            <button className="hero-btn secondary" onClick={()=> handleClick("contact")}>Contact Me</button>
          
          </div>

        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133887.jpg" alt="Madeus Rene" />
          </div>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">HTML5</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Next.js</span> 
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;