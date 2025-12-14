import React from "react";
import "./App.css";
import Card from "./Card";
import { FaGithub,FaWhatsappSquare , FaLinkedin  } from "react-icons/fa";
import Projects from "./project";
// import Travel from './assets/travel.png'
// import qr from './assets/src/QR.png'
// import pokemon from './assets/src/pokemon.png'
// import weather from './assets/src/weather.png'

export default function App() {
  return (
    <div id="portfolio">
      <nav id="nav-one">
        <h2 id="head">pugazhenthi</h2>
        <ul>
          <li><a href="#portfolio">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <div id="hero">
        <h1 className="title">The <span>react developer</span> for the</h1>
        <h1 className="title">web</h1>
        <p id="sentence">
          creating <b>high-quality web application</b> with modern tools and
          best practices for exceptional user experiences.
        </p>
        <button className="btn one"><a href="#projects">View Projects</a></button>
        <button className="btn two"><a href="https://github.com/PUGAZHENTHI731">Learn More</a></button>
      </div>
      <div id="about">
        <div id="box">
        <h1>About Me</h1>
        <p>
          I'm a frontend developer focused on crafting clean & user-friendly
          experiences.
        </p>
        <p>
          I build responsive websites that are fast, easy to use, and follow
          best coding practices, My expertise includes HTML, CSS, JavaScript,
          and modern frameworks to create dynamic, engaging interfaces with
          clean, optinized code.
        </p>
        <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.</p>
        <button className="btn one" ><a href="#">Contact Me</a></button>
        <button className="btn two"><a href="#">Download Resume</a></button>
        </div>
        <div id="img"><img src="./men.jpg"/></div>
      </div>

      <div id="skills">
        <h1>My Skills</h1>
        <p>Technologies and tools I ue to bring products to life</p>
        <div id="grid">
         <Card icon={'<i class="fa-brands fa-html5"></i>'} title={'HTML5'}/>
         <Card icon={'<i class="fa-brands fa-html5"></i>'} title={'CSS3'}/>
         <Card icon={'<i class="fa-brands fa-html5"></i>'} title={'JavaScript'}/>
         <Card icon={'<i class="fa-brands fa-html5"></i>'} title={'React'}/>
         
        </div>
      </div>
      <div id="projects">
        <h1>My Projects</h1>
        <p>check out some of my recent work</p>
        
          <div id="container">
             <Projects image={'/travel.png'} title={`A modern and fully responsive travel booking interface showcasing popular destinations and packages.Designed with smooth navigation, appealing visuals, and clear section layouts.`} tech={['HTML5','CSS']} viwe={'https://pugazhenthi731.github.io/project/Travel%20Agency/Home_page.htm'} code={'https://github.com/PUGAZHENTHI731/project/tree/main/Travel%20Agency'}/>

      <Projects image={'./QR.png'} title={`A full-stack project where users enter details, and the system generates a unique QR code stored in a MySQL database. Includes user forms, backend validation.`} tech={['HTML5','CSS','React','API']} viwe={'https://pugazhenthi731.github.io/QR-Code-Generator/'} code={'https://github.com/PUGAZHENTHI731/QR-Code-Generator.git'}/>

      <Projects image={'./pokemon.png'} title={`A fully responsive Pokémon information explorer built using React and PokéAPI. Includes search, stats display, dynamic icons, loading animations, and a clean card-based UI.`} tech={['HTML5','CSS','React','API']} viwe={'https://pugazhenthi731.github.io/Pokemon-World/'} code={'https://github.com/PUGAZHENTHI731/Pokemon-World.git'}/>

      <Projects image={'./weather.png'} title={`A responsive weather application that fetches real-time temperature, humidity, and wind data using an external weather API. Includes city search and themed UI.`} tech={['HTML5','CSS','React','API']} viwe={'https://pugazhenthi731.github.io/Weather-App/'} code={'https://github.com/PUGAZHENTHI731/Weather-App.git'}/>
          </div>
      </div>
     
      

      <div id="footer">
        <div id="link">
          <h2>pugazhenthi</h2>
          <ul>
          <li><a href="#portfolio">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
          </ul>
          <div id="icons">
            <a href="https://github.com/PUGAZHENTHI731"><FaGithub className="icon"/></a>
            <a href="https://web.whatsapp.com/"><FaWhatsappSquare  className="icon"/></a>
            <a href=""><FaLinkedin  className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
