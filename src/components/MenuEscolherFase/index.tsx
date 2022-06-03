import styles from './MenuEscolherFase.module.scss';
import fases_disponiveis from 'data/fases';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function MenuEscolherFase() {

    const [fase, setFase] = useState<number>();
    const navegar = useNavigate();

    function irParaFase(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        if (fase === undefined) {
            alert("Selecione uma fase!");
            return;
        }
        navegar(`/fase/${fase}`);
    }

    return (
        <form className={styles.menu} onSubmit={irParaFase}>
            <label className={styles.menu__rotulo} htmlFor="fases">Escolha uma fase:</label>
            <select onChange={evento => setFase(parseInt(evento.target.value))} name="fases" id="fases" defaultValue={1} className={styles.menu__fases} required>
                <option value="1" disabled>Fases disponíveis:</option>
                {fases_disponiveis.map(fase => (
                    <option key={fase.id} value={fase.id}>{fase.label}</option>
                ))}
            </select>
            <button type="submit" className={styles.menu__jogar}>Jogar</button>
        </form>
    );
}