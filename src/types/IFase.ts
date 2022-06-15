import IPosicao from "./IPosicao"

export default interface IFase {
    id: number,
    label: string,
    posicaoPersonagens: {
        sherlock: IPosicao,
        breno: IPosicao,
        jaminha: IPosicao
    },
    mapa: string[][],
    pontuacao: number,
    racoesFaltando: number,
    ninjasRestantes: number,
    especialAtivo: boolean,
    duracaoEspecial: number,
    ganhou: boolean,
    perdeu: boolean
}