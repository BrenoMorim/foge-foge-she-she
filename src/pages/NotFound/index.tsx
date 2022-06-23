import { useNavigate } from "react-router-dom";
import "./index.css";
import "styles/base.css";

export default function NotFound() {
    
    const navegar = useNavigate();
    function voltar() {
        navegar(-1);
    }
    return (
        <section className="nao-encontrado base__painel-roxo base__flex-container">
            <h1>Erro 404</h1>
            <h2>Nada foi encontrado =(</h2>
            <button className="base__botao" onClick={voltar}>Voltar</button>
        </section>
    );
}