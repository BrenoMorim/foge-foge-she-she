import styles from './MenuPontuacao.module.scss';

interface Props {
    labelFase: string,
    pontuacao: number
}

export default function MenuPontuacao({labelFase, pontuacao}: Props) {
    
    return (
        <section className={styles.menuPontuacao}>
            <article className={styles.informacoes}>
                <h2 className={styles.informacoes__subtitulo}>Fase:</h2>
                <h2 className={styles.informacoes__subtitulo}>{labelFase}</h2>
            </article>
            <article className={styles.informacoes}>
                <h2 className={styles.informacoes__subtitulo}>Pontuação:</h2>
                <h2 className={styles.informacoes__subtitulo}>{pontuacao}</h2>
            </article>
        </section>
    );
}