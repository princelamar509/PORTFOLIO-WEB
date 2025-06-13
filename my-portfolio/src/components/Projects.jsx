import { useState } from "react";
import ecommerce from "../assets/ecommerce.jpeg";
import securepay from "../assets/securepay.jpeg";
import weather from "../assets/weather.jpeg";
import Settle from "../assets/Settle.jpeg";
const projectsData = [
  { id: 1,
    title: "E-commerce Platform", 
    category: "React",
     img: ecommerce, 
     description: "A fully responsive e-commerce website with product filtering, shopping cart, and payment integration.", 
     tech: ["React", "Redux", "Stripe", "Firebase"],
    liveDemo: "https://princelamar509.github.io/ECOMERCE-3/",
    SourceCode: "https://github.com/princelamar509/ECOMERCE-3/tree/main"
   },
   { id: 2, 
    title: "Payment management ", 
    category: "React",
     img: securepay, 
    description: "A fully responsive payment management/money transfer app allow user to add/send payment and receive payment securely .", 
    tech: ["React", "Node.js", "MockData"] ,
    liveDemo: "https://princelamar509.github.io/securepay/",
    SourceCode: "https://github.com/princelamar509/securepay"
   },
   { id: 3,
     title: "Weather Dashboard",
      category: "JavaScript",
       img: weather,
       description: "An interactive weather application that shows current and forecast weather data with beautiful visualizations.",
        tech: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
        liveDemo: "https://princelamar509.github.io/WEATHERAPP/",
        SourceCode: "https://github.com/princelamar509/WEATHERAPP"
    },
   
    { id: 4,
     title: "Dating app Settle", 
     category: "UI/UX React Native ", 
     img: Settle,
      description: "This a Dating app that foollow the same rules as all dating with different features focuse on intentional dating .A killer feature that allow user to request for date instead of endless swiping of course theres swipe now it just optional. Beta live now on Ios & Android 𛱘  refresh the page and send me a email .",
       tech: ["React Native ", "Firebase", "Styled Components", "Expo CLI"],
       liveDemo: "https://princelamar509.github.io/Portfolio-Template/",
       SourceCode: "https://github.com/princelamar509/Portfolio-Template/tree/main"

   }

    /*
  { id: 5,
     title: "Fitness Tracker",
      category: "Node.js", 
      img: "https://via.placeholder.com/600x400",
       description: "A workout tracking application that allows users to log exercises, track progress, and visualize fitness data.",
        tech: ["React Native", "Redux", "Firebase", "Health APIs"],
        liveDemo: "https://princelamar509.github.io/Fitness-Tracker/",
        SourceCode: "https://github.com/princelamar509/Fitness-Tracker/tree/main"

   },
   { id: 6,
     title: "Recipe Finder",
      category: "JavaScript", 
      img: "https://via.placeholder.com/600x400",
     description: "A recipe search application that helps users find dishes based on ingredients they have at home.",
      tech: ["React", "Context API", "Edamam API", "CSS Grid"] ,
      liveDemo: "https://princelamar509.github.io/Recipe-Finder/",
      SourceCode: "https://github.com/princelamar509/Recipe-Finder/tree/main"
    },
    */
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-intro">
          Here are some of my recent projects that showcase my skills in front-end development, 
          responsive design, and user experience.
        </p>
      </div>
      
      <div className="projects-filter">
        {["All", "React", "JavaScript", "UI/UX", "Node.js"].map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-img">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveDemo} className="project-link"><span>Live Demo</span></a>
                  <a href={project.SourceCode} className="project-link"><span>Source Code</span></a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-more">
        <p>Want to see more of my work?</p>
        <a href="https://github.com/princelamar509?tab=overview&from=2025-03-01&to=2025-03-23" className="more-btn">Visit My GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
