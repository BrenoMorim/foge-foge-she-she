import { useNavigate, useParams } from 'react-router-dom';
import carregaFasePorId from 'util/carregaFasePorId';
import ManipuladorDeState from 'util/ManipuladorDeState';
import './index.css';
import 'styles/base.css';

interface Props {
    vitoria: boolean,
    pontuacaoFinal: number,
    manipuladorDeState: ManipuladorDeState
}

export default function TelaFinal({vitoria, pontuacaoFinal, manipuladorDeState}: Props) {
    const navegar = useNavigate();
    const params = useParams();
    const id = Number(params.id);
    const temProximaFase = carregaFasePorId(id + 1) !== undefined;
    function voltarParaInicio() {
        navegar('/');
    }
    function jogarNovamente() {
        manipuladorDeState.carregarFase(id);
    }
    function irParaProximaFase() {
        if (temProximaFase) {
            manipuladorDeState.carregarFase(id + 1);
            navegar(`/fase/${id + 1}`);
        }
    }
    return (
        <section className="tela-final base__flex-container base__painel-roxo">
            <h1 className="base__titulo">{vitoria ? 'Parabéns! Você ganhou =)' : 'Que pena! Você perdeu =('}</h1>
            {pontuacaoFinal !== 0 && 
            <h2 className="base__subtitulo">Pontuação final: {pontuacaoFinal}</h2>}
            <button className="base__botao" onClick={voltarParaInicio}>
                Voltar para o Início
            </button>
            {<button className="base__botao" onClick={jogarNovamente}>
                {vitoria ? 'Jogar Novamente' : 'Tentar Novamente'}
            </button>}
            {(vitoria && temProximaFase) && <button className="base__botao" onClick={irParaProximaFase}>
                Ir para Próxima Fase
            </button>}
        </section>
    );
}