import { caracteres } from "data/caracteres";

/**
 * Faz a contagem de quantos ninjas faltam no mapa, essa busca é feita somente
 * uma vez na hora de carregar a fase, para ter uma performance melhor,
 * a quantidade de ninjas faltando é atualizada quando necessário, através da classe
 * ManipuladorDeState, sem ser necessário fazer toda a iteração no mapa a cada movimento.
 * 
 * @param mapa mapa na forma de matriz de string
 * @returns número de ninjas faltando
 */

export default function contaNinjasFaltando(mapa: string[][]) {
    let ninjasEncontrados = 0;
    mapa.forEach(linha => {
        linha.forEach(caracter => {
            if (caracter === caracteres.breno || caracter === caracteres.jaminha) {
                ninjasEncontrados++;
            }
        });
    });
    return ninjasEncontrados;
}