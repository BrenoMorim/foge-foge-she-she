import './index.css';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho() {

    const navegar = useNavigate();
    function voltarParaInicio() {
        navegar('/');
    }

    return (
        <header className="cabecalho" onClick={voltarParaInicio}>
            <img className="cabecalho__logo" src='/assets/logo.png'/>
        </header>
    );
}