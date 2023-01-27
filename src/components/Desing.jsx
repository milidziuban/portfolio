import React from "react";
import './Desing.css'
import WebDesing from './imagenes/webdesing.jpg'
import planA from './imagenes/planA.jpg'
import tuenti from './imagenes/tuenti.jpg'

export default function Desing() {
    return (
        <div className="backg">
            <div className="desingItem">
                <h3> DISEÑO UX/UI </h3>
                <div className="proyects">

                    <div>
                        <a className="imgA" href="https://www.behance.net/gallery/151858757/Landing-page-Web-Design"> Web Desing
                            <p> Proyecto realizado con un equipo de Desarrolladores, Diseñadores y Marketing Digital  para un estudio de abogados </p>
                        </a>
                        <img className="img1" src={WebDesing} width='280px' height='280px' alt="webDesing"></img>
                    </div>

                    <div>
                        <a className="imgA" href="https://www.behance.net/gallery/146600553/Plan-A-Proyecto"> Plan A diseño
                            <p> Proyecto realizado para curso básico de diseño UX/UI </p>
                        </a>
                        <img className="img1" src={planA} width='280px' height='280px' alt="planA"></img>
                    </div>

                    <div>
                        <a className="imgA" href="https://www.behance.net/gallery/155386987/Rediseno-de-Tuenti"> Tuenti Rediseño
                            <p> Proyecto realizado para curso avanzado de diseño UX/UI </p>
                        </a>
                        <img className="img1" src={tuenti} width='280px' height='280px' alt="tuenti"></img>
                    </div>
                </div>
            </div>
            <div className="frame">
                <iframe
                    title="ux/ui"
                    className="styleFrame"
                    width="800"
                    height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVUHEaYh32t48xj0JnonnZI%2FWireframeDziuban%3Fnode-id%3D57%253A1056%26scaling%3Dscale-down%26page-id%3D57%253A975%26starting-point-node-id%3D57%253A1065%26show-proto-sidebar%3D1" allowfullscreen>
                </iframe>
            </div>
            <a href="https://www.behance.net/milagrosdziuban1"> Ver más proyectos </a>
        </div>
    )
}