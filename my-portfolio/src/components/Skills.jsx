import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillsData = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "React.js", level: 82 },
        { name: "TypeScript", level: 70 },
        { name: "Node.js", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Redux", level: 85 },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "MacOS", level: 70 },
        { name: "D3JS", level: 75 },
        { name: "Vercel", level: 60 },
        { name: "Visual Studio Code", level: 70 },
      ,
       
      ],
    },
  ];

  const currentlyLearning = [
    { name: "SQL ", icon: "📚" },
    { name: "Three.js", icon: "📚" },
    { name: "Python", icon: "📚" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "GraphQL Advanced", icon: "🛠" },
  ];

  const otherTools = [
    "TypeScript", "SASS/SCSS", "Tailwind CSS", "Styled Components", "Material UI",
    "GraphQL", "AWS", "Docker", "Netlify", "Vercel", "SEO Optimization",
    "Accessibility", "Performance Optimization"
  ];

  return (
    <section id="skills" ref={ref}>
      <div className="skills-header">
        <h2>My Skills & Expertise</h2>
        <p className="skills-intro">
          With over 1.5 years of experience in web development, I've built a diverse skill set
          focused on creating modern, responsive, and user-friendly web applications.
        </p>
      </div>

      <div className="skills-container">
        {skillsData.map((category, catIndex) => (
          <div className="skill-category" key={catIndex}>
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.category}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.9 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-skills">
        <h3>Other Technologies I Work With</h3>
        <div className="skill-tags">
          {otherTools.map((tool, index) => (
            <span key={index} className="skill-tag">{tool}</span>
          ))}
        </div>
      </div>

      <div className="learning-now">
        <h3>Currently Learning</h3>
        <div className="learning-items">
          {currentlyLearning.map((learning, index) => (
            <div key={index} className="learning-item">
              <span className="learning-icon">{learning.icon}</span>
              <span className="learning-name">{learning.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
