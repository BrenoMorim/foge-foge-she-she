import { caracteres } from "data/caracteres";
import IPosicao from "types/IPosicao";

export default function getPosicaoPersonagens(mapa: string[][]) {
    const posicaoPersonagens = {
        sherlock: {i: -1, j: -1} as IPosicao,
        breno: {i: -1, j: -1} as IPosicao,
        jaminha: {i: -1, j: -1} as IPosicao
    };
    mapa.forEach((linha, i) => {
        linha.forEach((caracter, j) => {
            if (caracter === caracteres.breno) {
                posicaoPersonagens.breno = {i, j};
            } else if (caracter === caracteres.sherlock) {
                posicaoPersonagens.sherlock = {i, j};
            } else if (caracter === caracteres.jaminha) {
                posicaoPersonagens.jaminha = {i, j};
            }
        });
    });
    return posicaoPersonagens;
}