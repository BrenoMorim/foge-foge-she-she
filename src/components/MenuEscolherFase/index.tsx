import fases_disponiveis from 'data/fases';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import 'styles/base.css';
import { menuEscolherFase } from 'mocks/textos';

export default function MenuEscolherFase() {

    const [fase, setFase] = useState<number>();
    const navegar = useNavigate();

    function irParaFase(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        navegar(`/fase/${fase}`);
    }

    return (
        <form className="menu-fases base__painel-roxo base__flex-container animate__animated animate__fadeIn" onSubmit={irParaFase}>
            <label className="menu-fases__rotulo" htmlFor="fases">{ menuEscolherFase.selectLabel }</label>
            <select onChange={evento => setFase(parseInt(evento.target.value))} name="fases" id="fases" defaultValue={1} className="menu-fases__fases base__painel-branco" required>
                <option value="1" disabled>{ menuEscolherFase.selectPlaceholder }</option>
                {fases_disponiveis.map(fase => (
                    <option key={fase.id} value={fase.id}>{fase.label}</option>
                ))}
            </select>
            <button type="submit" role="button" disabled={fase === undefined} className="base__botao">{ menuEscolherFase.botao }</button>
        </form>
    );
}