import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './FirstPage.css'
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './imagenes/logomili.png'
import CV from './imagenes/CV.pdf'


export default function FirstPage() {

    function irASeccion() {
        // Obtener la sección de destino utilizando el ID
        const seccionDestino = document.getElementById("seccion-destino");
        // Desplazarse a la sección de destino
        seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }

    function irADesing() {
        // Obtener la sección de destino utilizando el ID
        const seccionDestino = document.getElementById("seccion-desing");
        // Desplazarse a la sección de destino
        seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }

    function irADevelop() {
        // Obtener la sección de destino utilizando el ID
        const seccionDestino = document.getElementById("seccion-develop");
        // Desplazarse a la sección de destino
        seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="background">

            <div className="navBarInicio">
                <Link to="/">
                    <p className="title">  <img src={logo} width='65px' alt="logo"></img> </p>
                </Link>
                <div className="text">
                    <a onClick={() => irASeccion()}>SOBRE MÍ</a>
                    <a onClick={() => irADesing()}>DISEÑOS</a>
                    <a onClick={() => irADevelop()} to="/developer">DESARROLLOS</a>
                    <a href={CV}> <button className="buttonCV"> DESCARGAR CV </button> </a>

                </div>
            </div>
            <div className="firstPage">
                <div className="izqPage">
                    <p className="pTitulo">
                        Hola! Soy Milagros
                    </p>
                    <p className="pSubTitulo">
                        Diseñadora UX/UI y Full Stack Developer
                    </p>
                    <h4>
                        Finalicé el BootCamp de Desarrollo Web Fullstack en SOYHENRY y sigo aprendiendo de manera autodidacta. Tambien soy Diseñadora UX/UI y estudiante avanzada en Licenciatura en Diseño Industrial en la cual, actualmente, estoy realizando el Trabajo final de Tesina
                    </h4>
                    <div className="buttons">
                        <a href="https://github.com/milidziuban"> <GitHubIcon fontSize='large' /> </a>
                        <a href="https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/" > <LinkedInIcon fontSize='large' /> </a>
                    </div>
                </div>
            </div>
            <button className="buttonLanding" onClick={() => irASeccion()}> VER MÁS </button>
        </div>
    )
}