import { caracteres } from "data/caracteres";
import Personagens from "data/Personagens";
import {direcoes} from "types/Direcoes";
import Eventos from "types/Eventos";
import IFase from "types/IFase";
import ehCaminho from "util/ehCaminho";
import getProximaPosicao from "util/getProximaPosicao";
import ManipuladorDeState from "./ManipuladorDeState";
import usarEspecial from "./usarEspecial";

export default function movimentarPersonagem(fase:IFase, direcao: typeof direcoes.Cima, manipuladorDeState: ManipuladorDeState, personagem: Personagens, especialAtivo = false) {
    const ehSherlock = personagem === Personagens.sherlock;
    const posicaoAtual = fase.posicaoPersonagens[personagem];
    const proximaPosicao = getProximaPosicao(direcao, posicaoAtual);
    const caracterDestino = fase.mapa[proximaPosicao.i][proximaPosicao.j];
    
    if (ehSherlock && ehCaminho(direcao, fase, posicaoAtual)) {
        let pontuacaoGanha = 2;
        if (direcao !== direcoes.Especial && especialAtivo) {
            manipuladorDeState.atualizarState(Eventos.diminuirTempoEspecial);
        }
        if (direcao === direcoes.Especial && especialAtivo) {
            const ninjasEspantados = usarEspecial(fase, manipuladorDeState);
            pontuacaoGanha += ninjasEspantados * 100;
            manipuladorDeState.atualizarState(Eventos.espantarNinja, ninjasEspantados);
        } else {
            if (caracterDestino === caracteres.racao) {
                pontuacaoGanha += 10;
                manipuladorDeState.atualizarState(Eventos.comerRacao);
            }
            else if (caracterDestino === caracteres.especial) {
                pontuacaoGanha += 50;
                manipuladorDeState.atualizarState(Eventos.pegarEspecial);
            }
            fase.mapa[posicaoAtual.i][posicaoAtual.j] = caracteres.espacoVazio;
            fase.mapa[proximaPosicao.i][proximaPosicao.j] = caracteres.sherlock;
            fase.posicaoPersonagens.sherlock = {i: proximaPosicao.i, j: proximaPosicao.j};
        }
        manipuladorDeState.atualizarState(Eventos.ganharPontos, pontuacaoGanha);
    } else if (!ehSherlock) {
        const ninja = caracteres[personagem];
        if (caracterDestino === caracteres.sherlock) {
            manipuladorDeState.atualizarState(Eventos.perder);
            fase.mapa[posicaoAtual.i][posicaoAtual.j] = caracteres.espacoVazio;
            fase.mapa[proximaPosicao.i][proximaPosicao.j] = ninja;
            fase.posicaoPersonagens.sherlock = {i: -1, j: -1};
        } else {
            fase.mapa[posicaoAtual.i][posicaoAtual.j] = caracterDestino;
            fase.mapa[proximaPosicao.i][proximaPosicao.j] = ninja;
        }
        fase.posicaoPersonagens[personagem] = proximaPosicao;
    }
}