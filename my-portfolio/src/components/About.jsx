import Resume from "../assets/resume.jpeg"
const About = () => {
  return (
    <section id="about">
      <div id="about-content">
        <div id="about-left">
          <img id="profile-pic" src="https://img.freepik.com/premium-photo/memoji-african-american-man-white-background-emoji_826801-6857.jpg" alt="Profile Picture" />
        </div>
        <div id="about-right">
          <h2>About Me</h2>
          <p>
            I’m a <strong className="emp1">creative front-end developer</strong> based in Indianapolis, Indiana, passionate about 
            crafting interactive and visually engaging digital experiences. My expertise lies in React.js, 
            modern UI/UX design, and <strong>web performance optimization.</strong>
          </p>

          <div className="about-details">
            <div className="detail-box">
              <h3>🎯 Focus Areas</h3>
              <ul>
                <li>Responsive Web Design</li>
                <li>UI/UX Best Practices</li>
                <li>Performance Optimization</li>
                <li>Interactive Animations</li>
                <li>Modern Front-End Architecture</li>
              </ul>
            </div>

            <div className="detail-box">
              <h3>🚀 Tech Stack</h3>
              <ul>
                <li>React.js, Node.js</li>
                <li>JavaScript (ES6+)</li>
                <li>CSS3, SASS, Styled Components</li>
                <li>API Integration</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>

          <p className="about-cta">
            I'm always looking for exciting opportunities where I can apply my skills and grow as a developer. 
            If you're looking for someone passionate about front-end engineering, let’s connect!
          </p>
      <a href={Resume} className="btn"><span className="">Download My CV</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className="download-icon"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>


       </a>
      
        </div>
      </div>
    </section>
  );
};

export default About;
