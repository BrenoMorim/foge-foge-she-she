import styles from './Cabecalho.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho() {

    const navegar = useNavigate();
    function voltarParaInicio() {
        navegar('/');
    }

    return (
        <header className={styles.cabecalho} onClick={voltarParaInicio}>
            <img className={styles.cabecalho__logo} src='/assets/logo.png'/>
        </header>
    );
}