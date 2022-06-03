export default function contaRacoesFaltando(mapa: string[][]) {
    let racoesEncontradas = 0;
    mapa.forEach(linha => {
        racoesEncontradas += linha.filter(char => char === "*").length;
    })
    return racoesEncontradas;
}