import { useNavigate } from "react-router-dom";
import styles from './NotFound.module.scss';

export default function NotFound() {
    
    const navegar = useNavigate();
    function voltar() {
        navegar(-1);
    }
    return (
        <section className={styles.naoEncontrado}>
            <h1>Erro 404</h1>
            <h2>Nada foi encontrado =(</h2>
            <button className={styles.naoEncontrado__botao} onClick={voltar}>Voltar</button>
        </section>
    );
}