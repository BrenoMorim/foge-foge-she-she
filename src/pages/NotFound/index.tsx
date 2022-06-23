import { useNavigate } from "react-router-dom";
import "./index.css";

export default function NotFound() {
    
    const navegar = useNavigate();
    function voltar() {
        navegar(-1);
    }
    return (
        <section className="nao-encontrado">
            <h1>Erro 404</h1>
            <h2>Nada foi encontrado =(</h2>
            <button className="nao-encontrado__botao" onClick={voltar}>Voltar</button>
        </section>
    );
}