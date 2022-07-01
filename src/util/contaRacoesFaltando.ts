/**
 * Conta quantas rações estão sobrando no mapa, fazendo a contagem uma
 * só vez ao carregar a fase.
 * 
 * @param mapa mapa na forma de matriz de string
 * @returns quantidade de rações faltando
 */

export default function contaRacoesFaltando(mapa: string[][]) {
    let racoesEncontradas = 0;
    mapa.forEach(linha => {
        racoesEncontradas += linha.filter(char => char === "*").length;
    })
    return racoesEncontradas;
}