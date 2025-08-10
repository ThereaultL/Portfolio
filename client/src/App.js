import "./App.css";
import { FaLocationDot } from "react-icons/fa6";
import pfp from "./assets/headshot.jpeg";
import linkedin from "./assets/LinkedIn.jpg";
import github from "./assets/GitHub.png";
import email from "./assets/Email.jpg";
import About from "./About";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="header-info">
          <div class="headshot">
            <img src={pfp} alt="Headshot" />
          </div>
          <div class="portfolio">
            <h1>Lillian Thereault</h1>
            <p>Full-Stack Developer</p>
            <p>Undergradute at Western Carolina University</p>
            <div class="location">
              <FaLocationDot />
              <p>Cullowhee, NC</p>
            </div>
          </div>
        </div>
        <div class="nav-links">
          <a href="#about">
            <p>About</p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#contact">
            <p>Contact</p>
          </a>
        </div>
      </div>
      <About />
      <Projects />
      <div class="contact-container" id="contact">
        <h2>Contact</h2>
        <div class="contact-info">
          <a href="https://www.linkedin.com/in/lillian-thereault">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/ThereaultL">
            <img src={github} alt="GitHub" />
          </a>
          <a href="mailto:lillian05ad@gmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
}
