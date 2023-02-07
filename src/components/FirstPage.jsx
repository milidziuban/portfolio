import React, { useState, useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './FirstPage.css'
import proyectos from './imagenes/proyectos.png'
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './imagenes/logomili.png'
import desk2 from './imagenes/Desktop2.png'
import desk3 from './imagenes/Desktop3.png'
import desk4 from './imagenes/Desktop4.png'
import Desktop from './imagenes/Desktop1.png'


export default function FirstPage() {


    // const [backgroundImage, setBackgroundImage] = useState('https://www.unemi.edu.ec/wp-content/uploads/2022/08/banner_administracion_de_empresas_01-1.jpg')

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setBackgroundImage(`desk${Math.floor(Math.random() * 3) + 1}`);
    //     }, 1000);

    //     return () => {
    //       clearInterval(intervalId);
    //     };
    //   }, []);

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
        <div className="background"
            // style={{
            //     backgroundImage,
            //     transition: 'background-image 1s ease-in-out',
            // }}
            >

            <div className="navBarInicio">
                <Link to="/">
                    <p className="title">  <img src={logo} width='65px' alt="logo"></img> </p>
                </Link>
                <div className="text">
                    <a onClick={() => irASeccion()}>SOBRE MÍ</a>
                    <a onClick={() => irADesing()}>DISEÑOS</a>
                    <a onClick={() => irADevelop()} to="/developer">DESARROLLOS</a>
                    <button className="buttonCV"> DESCARGAR CV </button>

                </div>
            </div>
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
                    <img className='proyecto' src={proyectos} alt='not found' width='500px'></img>
                </div>
            </div>
            <button className="buttonLanding" onClick={() => irASeccion()}> VER MÁS </button>
        </div>
    )
}