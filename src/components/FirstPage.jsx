import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './FirstPage.css'
import imagecv from './imagecv.jpeg'

export default function FirstPage() {

    function irASeccion() {
        // Obtener la sección de destino utilizando el ID
        const seccionDestino = document.getElementById("seccion-destino");
        // Desplazarse a la sección de destino
        seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="backG">
            <div className="firstPage">
                <div className="izqPage">
                    <p>
                        Hola! Soy Milagros
                    </p>
                    <p>
                        Diseñadora UX/UI y Full Stack Developer
                    </p>
                    <h4>
                        Actualmente soy Diseñadora UX/UI, desarrolladora FullStack y estudiante avanzada en la Licenciatura en Diseño Industrial en la cual estoy realizando el Trabajo final de Tesina.
                    </h4>
                    <div className="buttons">
                        <a href="https://github.com/milidziuban"> <GitHubIcon fontSize='large' /> </a>
                        <a href="https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/" > <LinkedInIcon fontSize='large' /> </a>
                    </div>
                </div>
                <div className="derPage">
                    <img className='imagecv' src={imagecv} alt='not found' width='400px'></img>
                </div>
            </div>
            <button className="buttonLanding" onClick={() => irASeccion()}> VER MÁS </button>
        </div>
    )
}