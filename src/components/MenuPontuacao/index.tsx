import './index.css';

interface Props {
    labelFase: string,
    pontuacao: number
}

export default function MenuPontuacao({labelFase, pontuacao}: Props) {
    
    return (
        <section className="pontuacao">
            <article className="pontuacao__informacoes">
                <h2 className="pontuacao__informacoes__subtitulo">Fase:</h2>
                <h2 className="pontuacao__informacoes__subtitulo">{labelFase}</h2>
            </article>
            <article className="pontuacao__informacoes">
                <h2 className="pontuacao__informacoes__subtitulo">Pontuação:</h2>
                <h2 className="pontuacao__informacoes__subtitulo">{pontuacao}</h2>
            </article>
        </section>
    );
}