import React from "react";
import About from "./About";
import FirstPage from "./FirstPage";
import NavBar from "./NavBar";
import Desing from "./Desing";
import Developer from "./Developer";
import Contact from "./Contact";

export default function Landing() {
    return (
        <div>
            <NavBar />
            <FirstPage />
            <About />
            <Desing />
            <Developer />
            <Contact />
        </div>
    )
} 