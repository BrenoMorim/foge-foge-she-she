import "./index.css";
import "styles/base.css";

import { carregando } from "mocks/textos";

export default function Carregando() {
    return (
        <section className="carregando__container base__flex-container animate__animated animate__fadeIn">
            <h1 className="carregando__titulo">{ carregando.titulo }</h1>
            <div className="carregando__loader"></div>
        </section>
    )
}