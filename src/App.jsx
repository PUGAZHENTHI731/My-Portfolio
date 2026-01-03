import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import { FaGithub, FaWhatsappSquare, FaLinkedin, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBars, FaTimes, FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import Projects from "./project";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div id="portfolio">
      <nav id="nav-one">
        <h2 id="head">PUGAZHENTHI</h2>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#portfolio" onClick={toggleMenu}>home</a></li>
          <li><a href="#about" onClick={toggleMenu}>about</a></li>
          <li><a href="#skills" onClick={toggleMenu}>skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>contact</a></li>
        </ul>
      </nav>

      <div id="hero">
        <div className="hero-content">
          <h1 className="title">The <span>react developer</span> for the</h1>
          <h1 className="title">web</h1>
          <p id="sentence">
            creating <b>high-quality web applications</b> with modern tools and
            best practices for exceptional user experiences.
          </p>
          <div className="hero-btns">
            <button className="btn one"><a href="#projects">View Projects</a></button>
            <button className="btn two"><a href="https://github.com/PUGAZHENTHI731" target="_blank" rel="noopener noreferrer">Learn More</a></button>
          </div>
        </div>
      </div>

      <div id="about">
        <div id="box">
          <h1>About Me</h1>
          <h1 className="title">I'm <span>Pugazhenthi</span></h1>
          <p>
            I'm a frontend developer focused on crafting clean & user-friendly
            experiences.
          </p>
          <p>
            I build responsive websites that are fast, easy to use, and follow
            best coding practices. My expertise includes HTML, CSS, JavaScript,
            and modern frameworks to create dynamic, engaging interfaces with
            clean, optimized code.
          </p>
          <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.</p>
          <div className="about-btns">
            <button className="btn one"><a href="#contact">Contact Me</a></button>
            <button className="btn two"><a href="./Portfolio.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a></button>
          </div>
        </div>
        <div id="img">
          <div className="img-wrapper">
            <img src="./men.jpg" alt="Pugazhenthi" />
          </div>
        </div>
      </div>

      <div id="skills">
        <h1>My Skills</h1>
        <p>Technologies and tools I use to bring products to life</p>
        <div id="grid">
          <Card icon={FaHtml5} title={'HTML5'} />
          <Card icon={FaCss3Alt} title={'CSS3'} />
          <Card icon={FaJsSquare} title={'JavaScript'} />
          <Card icon={FaReact} title={'React'} />
        </div>
      </div>

      <div id="projects">
        <h1>My Projects</h1>
        <p>Check out some of my recent work</p>
        <div id="container">
          <Projects
            image={'./travel.png'}
            name="Travel Agency"
            title="A modern and fully responsive travel booking interface showcasing popular destinations and packages. Designed with smooth navigation, appealing visuals, and clear section layouts."
            tech={['HTML5', 'CSS']}
            viwe={'https://pugazhenthi731.github.io/project/Travel%20Agency/Home_page.html'}
            code={'https://github.com/PUGAZHENTHI731/project/tree/main/Travel%20Agency'}
          />
          <Projects
            image={'./QR.png'}
            name="QR Generator"
            title="A full-stack project where users enter details, and the system generates a unique QR code stored in a MySQL database. Includes user forms, backend validation."
            tech={['HTML5', 'CSS', 'React', 'API']}
            viwe={'https://pugazhenthi731.github.io/QR-Code-Generator/'}
            code={'https://github.com/PUGAZHENTHI731/QR-Code-Generator.git'}
          />
          <Projects
            image={'./pokemon.png'}
            name="Pokemon World"
            title="A fully responsive Pokémon information explorer built using React and PokéAPI. Includes search, stats display, dynamic icons, loading animations, and a clean card-based UI."
            tech={['HTML5', 'CSS', 'React', 'API']}
            viwe={'https://pugazhenthi731.github.io/Pokemon-World/'}
            code={'https://github.com/PUGAZHENTHI731/Pokemon-World.git'}
          />
          <Projects
            image={'./weather.png'}
            name="Weather App"
            title="A responsive weather application that fetches real-time temperature, humidity, and wind data using an external weather API. Includes city search and themed UI."
            tech={['HTML5', 'CSS', 'React', 'API']}
            viwe={'https://pugazhenthi731.github.io/Weather-App/'}
            code={'https://github.com/PUGAZHENTHI731/Weather-App.git'}
          />
        </div>
      </div>

      <div id="contact">
        <div className="contact-container">
          <h1>Get In Touch</h1>
          <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <p>pugalpugal731@gmail.com</p>
              </div>
              <div className="info-item">
                <FaLinkedin className="info-icon" />
                <p>linkedin.com/in/pugazhenthi</p>
              </div>
              <div className="info-item">
                <FaGithub className="info-icon" />
                <p>github.com/PUGAZHENTHI731</p>
              </div>
            </div>
            <form className="contact-form" action="https://formspree.io/f/" method="POST">
              <div className="form-group">
                <label><FaUser /> Name</label>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label><FaEnvelope /> Email</label>
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn one">Send Message <FaPaperPlane /></button>
            </form>
          </div>
        </div>
      </div>

      <div id="footer">
        <div id="link">
          <h2>PUGAZHENTHI</h2>
          <ul>
            <li><a href="#portfolio">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
          <div id="icons">
            <a href="https://github.com/PUGAZHENTHI731" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
            <a href="https://wa.me/919043843600" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare className="icon" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
