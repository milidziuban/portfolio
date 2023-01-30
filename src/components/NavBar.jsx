import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'

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
                <p className="title"> MI PORTFOLIO </p>
            </Link>
            <div className="text">
                <button onClick={() => irASeccion()}>SOBRE MI</button>
                <button onClick={() => irADesing()}>DISEÑO</button>
                <button onClick={() => irADevelop()} to="/developer">FULL STACK</button>
            </div>
        </div>
    )
}