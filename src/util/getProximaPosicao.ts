import { direcoes } from "types/Direcoes";
import IPosicao from "types/IPosicao";

export default function getProximaPosicao(direcao: typeof direcoes.Cima, posicaoAtual: IPosicao) {
    return {
        i: posicaoAtual.i + direcao.i,
        j: posicaoAtual.j + direcao.j
    }
}