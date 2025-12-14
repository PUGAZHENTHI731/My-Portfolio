import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

export default function Card({icon, title}) {
  return (
    <div className="card">
      <FaHtml5 className="icon" />
      <h2>{title}</h2>
      <div className="range"></div>
    </div>
  );
}
