import { caracteres } from "data/caracteres";
import Personagens from "data/Personagens";
import IFase from "types/IFase";
import IPosicao from "types/IPosicao";

/**
 * Atualiza o estado do mapa e a posição atual do personagem após a movimentação.
 * 
 * @param fase fase atual
 * @param personagem personagem a ser movimentado
 * @param caracterDeixado caracter a ser deixado na posição atual do personagem
 * @param proximaPosicao posição do personagem após o movimento
 */

export default function moverNoMapa(fase: IFase, personagem: Personagens, caracterDeixado: string, proximaPosicao: IPosicao) {
    const posicaoAtual = fase.posicaoPersonagens[personagem];
    fase.mapa[posicaoAtual.i][posicaoAtual.j] = caracterDeixado;
    fase.mapa[proximaPosicao.i][proximaPosicao.j] = caracteres[personagem];
    fase.posicaoPersonagens[personagem] = {i: proximaPosicao.i, j: proximaPosicao.j};
}