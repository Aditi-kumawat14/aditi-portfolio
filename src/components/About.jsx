import { useEffect, useRef } from "react";
import { FaGraduationCap, FaBriefcase, FaBullseye, FaCertificate } from "react-icons/fa";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".about-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <h1 className="main-header">ABOUT ADITI</h1>

      <section className="about-page">
        <div className="about-grid">

          <div className="about-col">

            <div className="education about-card">
              <h3><FaGraduationCap className="about-icon" /> EDUCATION</h3>
              <p><strong>B.E. Computer Engineering</strong></p>
              <p>Matoshri College of Engineering & Research Centre, Nashik</p>
              <p>2022 – 2026</p>
              <p>SGPA: 6.77 (1st Yr), 7.34 (2nd Yr), 8.31 (3rd Yr), 8.80 (4th Yr)</p>
            </div>

            <div className="focus about-card">
              <h3><FaBullseye className="about-icon" /> TECHNICAL FOCUS</h3>
              <ul>
                <li>Full Stack Web Development</li>
                <li>Responsive Web Design</li>
                <li>Frontend & Backend Integration</li>
                <li>Clean and Maintainable Code</li>
              </ul>
            </div>

          </div>

          <div className="about-col">

            <div className="internship about-card">
              <h3><FaBriefcase className="about-icon" /> INTERNSHIP</h3>
              <p><strong>Full Stack Web Development Intern</strong></p>
              <p>NetLeap IT Training and Solution, Nashik</p>
              <p>Jan 2025 – Feb 2025</p>
              <ul>
                <li>Built responsive UIs using HTML5, CSS3, JS, Bootstrap, PHP.</li>
                <li>Developed dynamic web pages with interactive features.</li>
                <li>Worked on UI design and basic backend integration.</li>
              </ul>
            </div>

            <div className="certificate about-card">
              <h3><FaCertificate className="about-icon" /> CERTIFICATIONS & ACHIEVEMENTS</h3>
              <ul>
                    <li>
                        Advanced Course on Green Skills & Artificial Intelligence — Edunet Foundation & AICTE
                        <br/><span><a href="https://drive.google.com/file/d/1Hk0PcdfU1fRcfeWdE-RB7sKcLGCOQEIq/view">Link</a></span>
                    </li>
                    <li>
                        Prepare Data for ML APIs – Google Cloud Skill Badge
                        <br/><span><a href="https://www.credly.com/badges/87004d27-d6fe-417f-b528-d235602b66b8/linked_in_profile">Link</a></span>
                    </li>
                    <li>
                        Cloud Functions: 3 Ways – Google Cloud Skill Badge
                        <br/><span><a href="https://www.credly.com/badges/b68c4ef3-567a-47d8-ba53-4c11225ce082/linked_in?t=t8a6ab">Link</a></span>
                    </li>
                </ul>
            </div>

          </div>

        </div>
      </section>
    </section>
  );
}

export default About;