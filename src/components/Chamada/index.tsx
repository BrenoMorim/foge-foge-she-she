import "./index.css";
import "styles/base.css";
import { chamada } from "mocks/textos";

export default function Chamada() {
    return (
        <section className="chamada base__flex-container" data-testid="chamada">
            <h3 className="chamada__titulo animate__animated animate__backInLeft">{ chamada.paragrafo1 }</h3>
            <div className="chamada__imagens">
                <img className="chamada__imagens__personagem animate__animated animate__backInLeft" src="assets/mapa/breno.png" alt="Breno ninja"/>
                <img className="chamada__imagens__personagem animate__animated animate__backInRight" src="assets/mapa/jaminha.png" alt="Jaminha ninja"/>
            </div>
            <h3 className="chamada__titulo animate__animated animate__backInRight">{ chamada.paragrafo2 }</h3>
        </section>
    );
}