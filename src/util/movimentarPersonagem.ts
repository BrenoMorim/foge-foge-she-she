import { caracteres } from "data/caracteres";
import Personagens from "data/Personagens";
import Pontuacao from "data/Pontuacao";
import {direcoes} from "types/Direcoes";
import IFase from "types/IFase";
import ehCaminho from "util/ehCaminho";
import getProximaPosicao from "util/getProximaPosicao";
import ManipuladorDeState from "./ManipuladorDeState";
import moverNoMapa from "./moverNoMapa";
import movimentarNinjas from "./movimentarNinjas";
import usarEspecial from "./usarEspecial";

export default function movimentarPersonagem(fase:IFase, direcao: typeof direcoes.Cima, manipuladorDeState: ManipuladorDeState, personagem: Personagens, especialAtivo = false) {
    const ehSherlock = personagem === Personagens.sherlock;
    const posicaoAtual = fase.posicaoPersonagens[personagem];
    const proximaPosicao = getProximaPosicao(direcao, posicaoAtual);
    const caracterDestino = fase.mapa[proximaPosicao.i][proximaPosicao.j];
    
    if (ehSherlock && ehCaminho(direcao, fase.mapa, posicaoAtual)) {
        let pontuacaoGanha = Pontuacao.aoSeMover;
        if (direcao !== direcoes.Especial && especialAtivo) {
            manipuladorDeState.diminuirDuracaoEspecial();
        }
        if (direcao === direcoes.Especial && especialAtivo) {
            const ninjasEspantados = usarEspecial(fase, manipuladorDeState);
            pontuacaoGanha += ninjasEspantados * Pontuacao.aoEspantarNinja;
            manipuladorDeState.espantarNinjas(ninjasEspantados);
        } else {
            if (caracterDestino === caracteres.racao) {
                pontuacaoGanha += Pontuacao.aoComerRacao;
                manipuladorDeState.comerRacao();
            }
            else if (caracterDestino === caracteres.especial) {
                pontuacaoGanha += Pontuacao.aoPegarEspecial;
                manipuladorDeState.pegarEspecial();
            }
            moverNoMapa(fase, personagem, caracteres.espacoVazio, proximaPosicao);
        }
        movimentarNinjas(fase, especialAtivo, manipuladorDeState);
        manipuladorDeState.ganharPontos(pontuacaoGanha);
    } else if (!ehSherlock) {
        if (caracterDestino === caracteres.sherlock) {
            moverNoMapa(fase, personagem, caracteres.espacoVazio, proximaPosicao);
            manipuladorDeState.perder();
            manipuladorDeState.removerPersonagemDoMapa(Personagens.sherlock);
        } else {
            moverNoMapa(fase, personagem, caracterDestino, proximaPosicao);
        }
    }
}