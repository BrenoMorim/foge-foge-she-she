import "./index.css";
import "styles/base.css";

export default function Carregando() {
    return (
        <section className="carregando__container base__flex-container">
            <h1 className="carregando__titulo">Carregando</h1>
            <div className="carregando__loader"></div>
        </section>
    )
}