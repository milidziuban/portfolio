import React from "react";
import './Developer.css';

export default function Developer() {
    return (
        <div className="back">
            <div className="desingItem">
                <h3> FULL STACK </h3>
                <div className="webproyect">
                    <div>
                        <a className="imgA" href="https://oasis-library.vercel.app/"> Oasis Library
                            <p> Proyecto realizado con un equipo de Desarrolladores para el cursado de la carrera de Full Stack en SoyHenry </p>
                        </a>
                        <img className="img1" src='https://media4.giphy.com/media/yVGNMRvAYKx75qoMJu/giphy.gif?cid=790b7611560b96d7d7ec623d19fba2daa40a50fdcf3b596f&rid=giphy.gif&ct=g' alt="oasislibrary"></img>
                    </div>
                    <div>
                        <a className="imgA" href="https://youtu.be/xz8T4tAWKPA"> Proyecto Dogs
                            <p> Proyecto realizado de manera individual para el cursado de la carrera de Full Stack en SoyHenry </p>
                        </a>
                        <img className="img1" src='https://media4.giphy.com/media/XNGtip6WfBqFBI7ZWi/giphy.gif?cid=790b7611046b25f422c19944f7ab2cd6daa8ff8c796ec557&rid=giphy.gif&ct=g' width='280px' height='280px' alt="webDesing"></img>
                    </div>
                    <div>
                        <a className="imgA" href="https://oasis-library.vercel.app/"> Proyecto Rick and Morty
                            <p> Proyecto realizado de forma autonoma para comprender y afinazar conceptos PROXIMAMENTE </p>
                        </a>
                        <img className="img1" src='https://media4.giphy.com/media/cximO229fNXDTe0miu/giphy.gif?cid=790b7611184fd00a31a510ccc63636bd081dbac02013e3cb&rid=giphy.gif&ct=g' width='280px' height='280px' alt="webDesing"></img>
                    </div>
                </div>
            </div>
        </div >
    )
}