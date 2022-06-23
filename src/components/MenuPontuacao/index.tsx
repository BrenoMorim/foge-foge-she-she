import './index.css';

interface Props {
    labelFase: string,
    pontuacao: number
}

export default function MenuPontuacao({labelFase, pontuacao}: Props) {
    
    return (
        <section className="pontuacao base__painel-roxo">
            <article className="base__flex-container">
                <h2 className="pontuacao__subtitulo">Fase:</h2>
                <h2 className="pontuacao__subtitulo">{labelFase}</h2>
            </article>
            <article className="base__flex-container">
                <h2 className="pontuacao__subtitulo">Pontuação:</h2>
                <h2 className="pontuacao__subtitulo">{pontuacao}</h2>
            </article>
        </section>
    );
}