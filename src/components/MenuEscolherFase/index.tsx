import fases_disponiveis from 'data/fases';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import 'styles/base.css';

export default function MenuEscolherFase() {

    const [fase, setFase] = useState<number>();
    const navegar = useNavigate();

    function irParaFase(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        navegar(`/fase/${fase}`);
    }

    return (
        <form className="menu-fases base__painel-roxo base__flex-container" onSubmit={irParaFase}>
            <label className="menu-fases__rotulo" htmlFor="fases">Escolha uma fase:</label>
            <select onChange={evento => setFase(parseInt(evento.target.value))} name="fases" id="fases" defaultValue={1} className="menu-fases__fases base__painel-branco" required>
                <option value="1" disabled>Fases disponíveis:</option>
                {fases_disponiveis.map(fase => (
                    <option key={fase.id} value={fase.id}>{fase.label}</option>
                ))}
            </select>
            <button type="submit" role="button" disabled={fase === undefined} className="base__botao">Jogar</button>
        </form>
    );
}