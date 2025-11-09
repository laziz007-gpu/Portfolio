import { useState } from "react"
import htmlIcon from "../assets/img/logo-icons/Html 5.svg"
import CSS from "../assets/img/logo-icons/CSS.svg";
import Git from "../assets/img/logo-icons/Git Logo.svg";
import Github from "../assets/img/logo-icons/GitHub.svg";
import Js from "../assets/img/logo-icons/Javascript.svg";
import Ts from "../assets/img/logo-icons/TypeScript.svg";
import React from "../assets/img/logo-icons/React.svg";
import Sass from "../assets/img/logo-icons/Sass.svg";
import Figma from "../assets/img/figma.png";
import Illustrator from "../assets/img/illustrator.png";
import Ps from "../assets/img/photoshop.png";
import uxui from "../assets/img/web-design.png";
// import { motion,  AnimatePresence } from "framer-motion";


export default function Skills() {

  const [ category , setCategory] = useState('Frontend')

  const skills = {
    Frontend: [
     {name: "HTML", icon: htmlIcon}, 
     {name: "CSS", icon: CSS}, 
     {name: "Git", icon: Git}, 
     {name: "GitHub", icon: Github}, 
     {name: "JavaScrypt", icon: Js}, 
     {name: "TypeScrypt", icon: Ts}, 
     {name: "React", icon: React}, 
     {name: "SCSS", icon: Sass} 
    ],
    Design: [
    {name: "Photoshop", icon: Ps}, 
    {name: "Illustrator", icon: Illustrator}, 
    {name: "Figma", icon: Figma}, 
    {name: "UI/UX", icon: uxui}
    ]
  }

  return (
     <>
        <div className="skills" id="skills">
          <div className="skills__title title">Навыки</div>
          <div className="skills__inner">
            <div className="skills__buttons">
            <button
              className={category === "Frontend" ? " btn active" : "btn"}
              onClick={() => setCategory("Frontend")}
            >
            Фронтенд
            </button>

            <button
              className={category === "Design" ? "btn active" : "btn"}
              onClick={() => setCategory("Design")}
            >
              Дизайн
            </button>
            </div>
            <div className="skills__inner_list">

                {skills[category].map((skill, i) => ( 
                  <div 
                  className="skill__item"
                  key={i}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  >
                    <img src={skill.icon} alt="" />
                    <h3 className="skill__item_title">{skill.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
     </>
  )
}
