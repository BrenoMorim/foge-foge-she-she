import { useNavigate } from 'react-router-dom';
import styles from './TelaFinal.module.scss';

interface Props {
    vitoria: boolean,
    pontuacaoFinal: number
}

export default function TelaFinal({vitoria, pontuacaoFinal}: Props) {
    const navegar = useNavigate();
    function voltarParaInicio() {
        navegar('/');
    }
    function jogarNovamente() {
        document.location.reload();
    }
    return (
        <section className={styles.telaFinal}>
            <h1 className={styles.telaFinal__titulo}>{vitoria ? 'Parabéns! Você ganhou =)' : 'Que pena! Você perdeu =('}</h1>
            {pontuacaoFinal !== 0 && 
            <h2 className={styles.telaFinal__titulo}>Pontuação final: {pontuacaoFinal}</h2>}
            <button className={styles.telaFinal__botao} onClick={voltarParaInicio}>
                Voltar para o Início
            </button>
            <button className={styles.telaFinal__botao} onClick={jogarNovamente}>
                {vitoria ? 'Jogar novamente' : 'Tentar novamente'}
            </button>
        </section>
    );
}