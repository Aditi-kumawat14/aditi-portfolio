import { useState, useEffect } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animate, setAnimate] = useState(false);

  const skills = [
    { icon: "devicon-c-plain", name: "C", category: "Languages" },
    { icon: "devicon-cplusplus-plain", name: "C++", category: "Languages" },
    { icon: "devicon-java-plain", name: "Java", category: "Languages" },
    { icon: "devicon-javascript-plain", name: "JavaScript", category: "Languages" },
    { icon: "devicon-python-plain", name: "Python", category: "Languages" },

    { icon: "devicon-angularjs-plain", name: "AngularJS", category: "Frameworks" },
    { icon: "devicon-nodejs-plain", name: "Node.js", category: "Frameworks" },
    { icon: "devicon-express-original", name: "Express.js", category: "Frameworks" },
    { icon: "devicon-react-original", name: "ReactJS", category: "Frameworks" },

    { icon: "devicon-git-plain", name: "Git", category: "Tools" },
    { icon: "devicon-github-original", name: "GitHub", category: "Tools" },
    { icon: "devicon-vscode-plain", name: "VS Code", category: "Tools" },
    { icon: "devicon-eclipse-plain", name: "Eclipse", category: "Tools" },

    { icon: "devicon-mysql-plain", name: "MySQL", category: "Databases" },
    { icon: "devicon-mongodb-plain", name: "MongoDB", category: "Databases" },

    { icon: "bi bi-bar-chart", name: "Tableau", category: "Tools" },
    { icon: "bi bi-pie-chart", name: "Power BI", category: "Tools" },
  ];

  const categories = ["All", "Languages", "Frameworks", "Tools", "Databases"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, [activeCategory]);

  return (
    <section id="skills">
      <h1 className="main-header">My Skills</h1>

      {/* Filter Buttons */}
      <div className="skill-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active-filter" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <section className="skills-wrapper">
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              className={`skill-card ${animate ? "show-skill" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              key={index}
            >
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Skills;