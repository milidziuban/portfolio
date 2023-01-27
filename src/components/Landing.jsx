import React from "react";
import About from "./About";
import FirstPage from "./FirstPage";
import Desing from "./Desing";
import Developer from "./Developer";

export default function Landing() {

    return (
        <div>
            <FirstPage />
            <section id="seccion-destino">
            <About />
            </section>
            <Desing />
            <Developer />
        </div>
    )
} 