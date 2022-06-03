import styles from './Carregando.module.scss';

export default function Carregando() {
    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>Carregando</h1>
            <div className={styles.loader}></div>
        </section>
    )
}