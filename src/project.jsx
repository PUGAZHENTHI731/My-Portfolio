import React from "react";
import { FaGithub, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

export default function Projects({ image, title, name, tech, viwe, code }) {
  return (

    <div className="project" key={name}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="para">{title}</p>
      <ul>
        {tech.map((use, index) => (
          <li key={index}>{use}</li>
        ))}
      </ul>
      <div className="buttons">
        <div className="btn">
          <a href={viwe} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        <a href={code} className="code" target="_blank" rel="noopener noreferrer">
          <FaGithub /> Code
        </a>
      </div>
    </div>
  )
}