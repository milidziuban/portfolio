import React from "react";
import './About.css'
import CoderAvanzado from './imagenes/CoderAvanzado.png'
import CoderBasico from './imagenes/CoderBasico.png'
import CV from './imagenes/CV.pdf'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import fotocv from './imagenes/fotocv.png'


export default function About() {
    return (
        <div className="background1">
                <h1 className="sombra"> SOBRE MÍ </h1>
                 <div className="img">
                    <img src={fotocv} width='460px'></img>
                </div>
                <p className="titleSobreMi"> SOBRE MÍ </p>
                <div className="about">
                    <h3 className="titleAbout">

                        <h4> Universidad: </h4>
                        <p>
                            - Licenciatura en Diseño Industrial (2017 - Actualidad) Universidad Nacional del Litoral, Facultad de Arquitectura, Diseño y Urbanismo.
                        </p>
                        <h4>  Cursos: </h4>
                        <p>
                            - Diseño UX/UI (2022  Marzo - Junio) CoderHouse
                        </p>
                        <Stack spacing={2} direction="row">
                            <Button
                                href={CoderBasico}
                                size="small"
                                variant="text">Ver certificado</Button>
                        </Stack>
                        <p>
                            - Diseño UX/UI Avanzado (2022 - Actualidad) CoderHouse
                        </p>
                        <Stack spacing={2} direction="row">
                            <Button
                                href={CoderAvanzado}
                                size="small"
                                variant="text">Ver certificado</Button>
                        </Stack>
                        <p>
                            - Introducción a HTML, CSS y JavaScript (2022 Junio- Agosto) HackAcademy
                        </p>
                        <Stack spacing={2} direction="row">
                            <Button
                                href='https://plataforma.ha.dev/certificates/l1gnabcpct'
                                size="small"
                                variant="text">Ver certificado</Button>
                        </Stack>
                        <p>
                            - Full Stack Developer (2022 Septiembre - 2023 Enero) Bootcamp SoyHenry
                        </p>
                        <Stack spacing={2} direction="row">
                            <Button
                                href="https://certificates.soyhenry.com/cert?id=b17f00b7-9529-49d2-9088-9da174a8d261"
                                size="small"
                                variant="text">Ver certificado</Button>
                        </Stack>

                    </h3>


                    {/* <h4> Tecnologías y herramientas </h4>
                <p align="left" className="habilidades">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a>

                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a>

                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>

                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a>

                    <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> </a>

                    <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a>

                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a>

                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a>

                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a>

                    <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" /> </a>
                </p> */}

    
                </div>
           
        </div>
    )
}