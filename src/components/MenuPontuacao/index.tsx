import './index.css';

interface Props {
    labelFase: string,
    pontuacao: number
}

export default function MenuPontuacao({labelFase, pontuacao}: Props) {
    
    return (
        <section className="pontuacao base__painel-roxo">
            <article className="base__flex-container">
                <h2 className="pontuacao__titulo">
                    Fase: <span className="pontuacao__subtitulo" data-testid="fase-label">{labelFase}</span>
                    </h2>
            </article>
            <article className="base__flex-container">
                <h2 className="pontuacao__titulo">
                    Pontuação: <span className="pontuacao__subtitulo" data-testid="fase-pontuacao">{pontuacao}</span>
                </h2>
            </article>
        </section>
    );
}