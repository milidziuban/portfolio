import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="navBar">
            <Link to="/">
                <h2 className="title"> PORTFOLIO </h2>
            </Link>
            <div className="text">
                <Link to="/about">SOBRE MI</Link>
                <Link to="/desing">DISEÑO</Link>
                <Link to="/developer">FULL STACK</Link>
            </div>
        </div>
    )
}