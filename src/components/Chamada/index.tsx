import './index.css';

export default function Chamada() {
    return (
        <section className="chamada">
            <h3 className="chamada__titulo">Ajude o Sherlock a fugir do breno e da jaminha ninjas!</h3>
            <div className="chamada__imagens">
                <img className="chamada__imagens__personagem" src="assets/personagens/breno.png" alt="Breno ninja"/>
                <img className="chamada__imagens__personagem" src="assets/personagens/jaminha.png" alt="Jaminha ninja"/>
            </div>
            <h3 className="chamada__titulo">Ele precisa comer todas as rações ou espantar todos os ninjas com suas garras!</h3>
        </section>
    );
}