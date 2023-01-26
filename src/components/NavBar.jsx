import React from "react";
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="navBar">
            <h2 className="title"> PORTFOLIO </h2>
            <div className="text">
                <a href="./about"> SOBRE MÍ </a>
                <a href="./desing"> DISEÑO </a>
                <a href="./fullstack"> FULL STACK </a>
            </div>
        </div>
    )
}