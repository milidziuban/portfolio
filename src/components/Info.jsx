import React from "react";
import './Info.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CodeIcon from '@mui/icons-material/Code';


export default function Info() {
    return (
        <div className="fotter">
            <span className="foot">
                <p> <AlternateEmailIcon/> Correo electrónico: <a className="links" href="mailto:milagrosdziuban@hotmail.com"> milagrosdziuban@hotmail.com</a> </p>
                <p><LinkedInIcon/> Linkedin: <a className="links" href="https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/"> Milagros Dziuban </a> </p>
            </span>
            <span className="foot">
                <p> <CodeIcon /> Desarrollo y Diseño: <a className="links"> Milagros Dziuban  </a> </p>
            </span>
        </div>
    )
}