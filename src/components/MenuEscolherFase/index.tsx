import './index.css';
import fases_disponiveis from 'data/fases';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function MenuEscolherFase() {

    const [fase, setFase] = useState<number>();
    const navegar = useNavigate();

    function irParaFase(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        navegar(`/fase/${fase}`);
    }

    return (
        <form className="menu-fases" onSubmit={irParaFase}>
            <label className="menu-fases__rotulo" htmlFor="fases">Escolha uma fase:</label>
            <select onChange={evento => setFase(parseInt(evento.target.value))} name="fases" id="fases" defaultValue={1} className="menu-fases__fases" required>
                <option value="1" disabled>Fases disponíveis:</option>
                {fases_disponiveis.map(fase => (
                    <option key={fase.id} value={fase.id}>{fase.label}</option>
                ))}
            </select>
            <button type="submit" role="button" disabled={fase === undefined} className="menu-fases__jogar">Jogar</button>
        </form>
    );
}