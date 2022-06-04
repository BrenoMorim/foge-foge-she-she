import {direcoes} from "types/Direcoes";
import IPosicao from "types/IPosicao";
import getProximaPosicao from "./getProximaPosicao";
import { caracteres } from 'data/caracteres';

export default function ehCaminho(direcao: typeof direcoes.Baixo, mapa: string[][], posicaoAtual: IPosicao) {    
    if (posicaoAtual.i === -1 || posicaoAtual.j === -1) return false;
    const proximaPosicao = getProximaPosicao(direcao, posicaoAtual);
    let caracteresValidos = [caracteres.espacoVazio, caracteres.racao, caracteres.especial, caracteres.sherlock];
    return caracteresValidos.indexOf(mapa[proximaPosicao.i][proximaPosicao.j]) !== -1; 
}