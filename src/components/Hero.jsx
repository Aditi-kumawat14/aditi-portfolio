import { Typewriter } from "react-simple-typewriter";
import homeImage from "../assets/images/home.png";

function Hero() {
  return (
    
    <section id="home">         {/* Nav bar */}
      <header className="navbar">
      <div className="nav-container">
        <a href="/home" id="name">
          Aditi <span>K.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </div>
    </header>
      

      {/* HERO SECTION */}
      <section className="main-home fade-in-section">
        <div className="main-container">
          <p className="main-subtitle">HI , I'M</p>

          <h1 className="main-title">ADITI KUMAWAT</h1>

          <h2 className="main-role">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "React Developer"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="main-para">
            I build responsive, scalable, and user-friendly web applications that deliver seamless digital experiences. With strong expertise in modern frontend and backend technologies, I focus on writing clean, maintainable code combined with thoughtful design principles.

            I specialize in developing dynamic interfaces using React and AngularJS, and building robust server-side applications with Node.js and Express.js, supported by efficient database management using MySQL. My approach centers on creating smooth user journeys, intuitive UI/UX, and practical real-world solutions that perform consistently across devices.

            Passionate about continuous learning, I continuously explore new tools and technologies to refine my workflow and deliver high-quality, efficient solutions that feel effortless to use.
          </p>

          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1EE9sLVNp_DnKbgel-GxxE95X4ZQLJ0L_/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Download CV
            </a>

            <div className="hero-socials">
              <a
                href="https://github.com/Aditi-kumawat14"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/aditikumawat/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="home-image">
          <img src={homeImage} alt="Home Image" />
        </div>
      </section>
    </section>
  );
}

export default Hero;