import styles from './Chamada.module.scss';

export default function Chamada() {
    return (
        <section className={styles.chamada}>
            <h3 className={styles.titulo}>Ajude o Sherlock a fugir do breno e da jaminha ninjas!</h3>
            <div className={styles.imagens}>
                <img className={styles.personagem} src="assets/personagens/breno.png" alt="Breno ninja"/>
                <img className={styles.personagem} src="assets/personagens/jaminha.png" alt="Jaminha ninja"/>
            </div>
            <h3 className={styles.titulo}>Ele precisa comer todas as rações ou espantar todos os ninjas com suas garras!</h3>
        </section>
    );
}