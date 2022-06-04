import { caracteres } from "data/caracteres";
import Personagens from "data/Personagens";
import IFase from "types/IFase";
import IPosicao from "types/IPosicao";

export default function moverNoMapa(fase: IFase, personagem: Personagens, caracterDeixado: string, proximaPosicao: IPosicao) {
    const posicaoAtual = fase.posicaoPersonagens[personagem];
    fase.mapa[posicaoAtual.i][posicaoAtual.j] = caracterDeixado;
    fase.mapa[proximaPosicao.i][proximaPosicao.j] = caracteres[personagem];
    fase.posicaoPersonagens[personagem] = {i: proximaPosicao.i, j: proximaPosicao.j};
}