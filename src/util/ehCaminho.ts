import {direcoes} from "types/Direcoes";
import IFase from "types/IFase";
import IPosicao from "types/IPosicao";
import getProximaPosicao from "./getProximaPosicao";

export default function ehCaminho(direcao: typeof direcoes.Baixo, fase: IFase, posicaoAtual: IPosicao) {    
    if (posicaoAtual.i === -1 || posicaoAtual.j === -1) return false;
    const proximaPosicao = getProximaPosicao(direcao, posicaoAtual);
    let caracteresValidos = [' ', '*', 'E', 'S'];
    return caracteresValidos.indexOf(fase.mapa[proximaPosicao.i][proximaPosicao.j]) !== -1; 
}