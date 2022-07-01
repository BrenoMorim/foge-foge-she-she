import { direcoes } from "types/Direcoes";
import IPosicao from "types/IPosicao";

/**
 * Calcula qual a posição i e j na matriz do mapa da próxima posição que um personagem quer se mover.
 */

export default function getProximaPosicao(direcao: typeof direcoes.Cima, posicaoAtual: IPosicao) {
    return {
        i: posicaoAtual.i + direcao.i,
        j: posicaoAtual.j + direcao.j
    }
}