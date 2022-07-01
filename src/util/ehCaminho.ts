import {direcoes} from "types/Direcoes";
import IPosicao from "types/IPosicao";
import getProximaPosicao from "./getProximaPosicao";
import { caracteres } from 'data/caracteres';

/**
 * Calcula qual seria a próxima posição no mapa a partir da posição atual e da 
 * direção na qual quer se mover, depois verifica se a próxima posição é válida,
 * ou seja, se não é uma parede nem ninja.
 */

export default function ehCaminho(direcao: typeof direcoes.Baixo, mapa: string[][], posicaoAtual: IPosicao) {    
    if (posicaoAtual.i === -1 || posicaoAtual.j === -1) return false;
    const proximaPosicao = getProximaPosicao(direcao, posicaoAtual);
    let caracteresValidos = [caracteres.espacoVazio, caracteres.racao, caracteres.especial, caracteres.sherlock];
    return caracteresValidos.indexOf(mapa[proximaPosicao.i][proximaPosicao.j]) !== -1; 
}