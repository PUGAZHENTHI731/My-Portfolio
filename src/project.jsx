import React from "react";
import { FaGithub,FaWhatsappSquare , FaLinkedin  } from "react-icons/fa";

export default function Projects({image, title,tech,viwe,code}){
     return(
          
      <div className="project" key={title}>
              <img src={image} alt="" />
              <h2>Weather-App</h2>
              <p className="para">{title}</p>
              <ul >
                {tech.map(use=>(
                    <li>{use}</li>
                ))}
              </ul>
              <div className="buttons">
                  <div className="btn"><a href={viwe}>Live Demo</a></div>
                  <div className="code">
                    <FaGithub/>
                    <a href={code}>Code</a>
                  </div>
                </div>
            </div>
     )
}