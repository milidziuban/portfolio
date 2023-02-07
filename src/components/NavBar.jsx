import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './imagenes/logomili.png'

export default function NavBar() {

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
        <div className="navBar">
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
    )
}