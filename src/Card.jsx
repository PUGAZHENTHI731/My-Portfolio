import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

export default function Card({icon: Icon, title}) {
  return (
    <div className="card">
      <div className="icon-container">
        {Icon && <Icon className="icon" />}
      </div>
      <h2>{title}</h2>
      <div className="range"></div>
    </div>
  );
}
