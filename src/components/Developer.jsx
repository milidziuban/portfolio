import React from "react";
import './Developer.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



export default function Developer() {
    return (
        <div className="back">
            <div className="desingItem">
                <h3> FULL STACK </h3>
                <div className="webproyect">
                    <div>
                        <a className="imgA" href="https://oasis-library.vercel.app/">
                            <p className="parrafo">Oasis Library: Proyecto realizado con un equipo de Desarrolladores para el cursado de la carrera de Full Stack en SoyHenry
                                <button> VER MÁS <NavigateNextIcon /> </button>
                            </p>
                            <img className="img1" src='https://media4.giphy.com/media/yVGNMRvAYKx75qoMJu/giphy.gif?cid=790b7611560b96d7d7ec623d19fba2daa40a50fdcf3b596f&rid=giphy.gif&ct=g' alt="oasislibrary"></img>
                        </a>
                    </div>
                    <div>
                        <a className="imgA" href="https://youtu.be/xz8T4tAWKPA">
                            <p className="parrafo">Henry Dogs: Proyecto realizado de manera individual durante el cursado de la carrera de Full Stack en SoyHenry
                                <button> VER MÁS <NavigateNextIcon /> </button>
                            </p>
                            <img className="img1" src='https://media4.giphy.com/media/XNGtip6WfBqFBI7ZWi/giphy.gif?cid=790b7611046b25f422c19944f7ab2cd6daa8ff8c796ec557&rid=giphy.gif&ct=g' width='280px' height='280px' alt="webDesing"></img>
                        </a>
                    </div>
                    <div>
                        <a className="imgA" href="https://oasis-library.vercel.app/">
                            <p className="parrafo">Rick and Morty: Proyecto realizado de manera autónoma para descubrir, comprender y afinazar conceptos.
                                <button> EN PROCESO </button>
                            </p>
                            <img className="img1" src='https://media4.giphy.com/media/cximO229fNXDTe0miu/giphy.gif?cid=790b7611184fd00a31a510ccc63636bd081dbac02013e3cb&rid=giphy.gif&ct=g' width='280px' height='280px' alt="webDesing"></img>
                        </a>
                    </div>
                </div >
                     <h4 className="tecDevelop"> Tecnologías y herramientas utilizadas: </h4>
                <p align="left" className="habilidades">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a>

                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a>

                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>

                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a>

                    <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> </a>
{/* 
                    <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a> */}

                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a>

                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a>

                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a>

                    {/* <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" /> </a> */}
                </p>
            </div>
        </div >
    )
}