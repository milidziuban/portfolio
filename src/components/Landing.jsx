import React from "react";
import About from "./About";
import FirstPage from "./FirstPage";
import Desing from "./Desing";
import Developer from "./Developer";
import Info from "./Info"

export default function Landing() {

    return (
        <div>
            <FirstPage />
            <section id="seccion-destino">
            <About />
            </section>
            <section id="seccion-desing">
            <Desing />
            </section>
            <section id="seccion-develop">
            <Developer />
            </section>
            <Info/>

        </div>
    )
} 