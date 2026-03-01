import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const [animate, setAnimate] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const enterSite = () => {
    setAnimate(true);

    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  return (
    <div className="landing-wrapper">
      {/* Panels */}
      <div className={`panel left ${animate ? "slide-left" : ""}`}></div>
      <div className={`panel right ${animate ? "slide-right" : ""}`}></div>

      {/* Center Content */}
      <div className={`center-content ${loaded ? "fade-in" : ""} ${animate ? "fade-out" : ""}`}>
        <h1>Aditi Kumawat</h1>
        <p>Welcome To My Portfolio</p>
        <button onClick={enterSite}>Enter Portfolio</button>
      </div>
    </div>
  );
}

export default Landing;