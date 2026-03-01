import { useState } from "react";

import eventImage from "../assets/images/event_decor.png";
import event2 from "../assets/images/event3.png";
import event3 from "../assets/images/event4.png";
import event4 from "../assets/images/event5.png";
import event5 from "../assets/images/event6.png";
import event6 from "../assets/images/event7.png";
import event7 from "../assets/images/event8.png";
import event8 from "../assets/images/event9.png";
import event9 from "../assets/images/event10.png";
import event10 from "../assets/images/event11.png";

import task1 from "../assets/images/task1.png";
import task2 from "../assets/images/task2.png";
import task3 from "../assets/images/task3.png";
import task4 from "../assets/images/task4.png";
import task5 from "../assets/images/task5.png";
import task6 from "../assets/images/task6.png";
import task7 from "../assets/images/task7.png";
import task8 from "../assets/images/task8.png";

import p1 from "../assets/images/port1.png";
import p2 from "../assets/images/port2.png";
import p3 from "../assets/images/port3.png";
import p4 from "../assets/images/port4.png";
import p5 from "../assets/images/port5.png";



function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: "tasksphere",
      title: "TaskSphere — Full Stack Task Management System",
      description:
        "A full-stack task management system for organizing and tracking daily tasks with secure authentication and productivity analytics dashboard.",
      tech: ["ReactJS", "Node.js", "Express.js", "MySQL", "JWT", "Chart.js"],
      cover: task3,
      images: [task1 , task2 , task3 , task4 , task5 , task6 , task7 ,task8],
      live: "https://tasksphereproject.netlify.app",
      code: "https://github.com/Aditi-kumawat14/TaskSphere",
    },
    {
      id: "portfolio",
      title: "My Portolio",
      description:
        "A fully responsive portfolio website showcasing projects, skills, and contact information in a modern and elegant layout. Built with React, featuring smooth navigation, interactive UI elements, and real-time email integration for seamless communication.",
      tech: ["HTML5", "CSS3", "JavaScript", "ReactJS" , "Responsive Design"],
      cover: p1,
      images: [p1,p2,p3,p4,p4,p5],
      live: "https://aditi-portfolio-taupe-sigma.vercel.app/",
      code: "https://github.com/Aditi-kumawat14/aditi-portfolio",
    },
    {
      id: "event",
      title: "Event Decoration Website",
      description:
        "A responsive website to showcase and manage event decoration services including gallery, booking system, and inquiry handling.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
      cover: eventImage,
      images: [
        eventImage, event2, event3, event4, event5, event6, event7, event8, event9, event10],
      live: "#",
      code: "#",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects">
      <h1 className="main-header">My Projects</h1>

      <section className="projects-page">
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div
                className="project-clickable"
                onClick={() => openProject(project)}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="project-cover"
                  />

                  <div className="project-overlay">
                    <span>View Project Gallery</span>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn">
                  Live
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="btn-outline">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL WITH SLIDER ================= */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title}</h2>

            <div className="slider-container">
              {selectedProject.images.length > 1 && (
                <button className="slider-btn left" onClick={prevSlide}>
                  ‹
                </button>
              )}

              <img
                src={selectedProject.images[currentIndex]}
                alt="project"
                className="slider-image"
              />

              {selectedProject.images.length > 1 && (
                <button className="slider-btn right" onClick={nextSlide}>
                  ›
                </button>
              )}
            </div>

            <p>{selectedProject.description}</p>

            <button className="btn" onClick={closeProject}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;