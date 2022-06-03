import Eventos from "types/Eventos";

export default class ManipuladorDeState {
    private pontuacao: number;
    private setPontuacao: React.Dispatch<React.SetStateAction<number>>;
    private duracaoEspecial: number;
    private setDuracaoEspecial: React.Dispatch<React.SetStateAction<number>>;
    private setGanhou: React.Dispatch<React.SetStateAction<boolean>>;
    private setPerdeu: React.Dispatch<React.SetStateAction<boolean>>;
    private setEspecialAtivo: React.Dispatch<React.SetStateAction<boolean>>;
    private racoesFaltando: number;
    private setRacoesFaltando: React.Dispatch<React.SetStateAction<number>>;
    private ninjasRestantes: number;
    private setNinjasRestantes: React.Dispatch<React.SetStateAction<number>>;

    constructor(
        pontuacao: number,
        setPontuacao: React.Dispatch<React.SetStateAction<number>>,
        duracaoEspecial: number, 
        setDuracaoEspecial: React.Dispatch<React.SetStateAction<number>>,
        setGanhou: React.Dispatch<React.SetStateAction<boolean>>,
        setPerdeu: React.Dispatch<React.SetStateAction<boolean>>,
        setEspecialAtivo: React.Dispatch<React.SetStateAction<boolean>>,
        racoesFaltando: number,
        setRacoesFaltando: React.Dispatch<React.SetStateAction<number>>,
        ninjasRestantes: number,
        setNinjasRestantes: React.Dispatch<React.SetStateAction<number>>,
        ) {
            this.pontuacao = pontuacao;
            this.setPontuacao = setPontuacao;
            this.duracaoEspecial = duracaoEspecial;
            this.setDuracaoEspecial = setDuracaoEspecial;
            this.setGanhou = setGanhou;
            this.setPerdeu = setPerdeu;
            this.setEspecialAtivo = setEspecialAtivo;
            this.racoesFaltando = racoesFaltando;
            this.setRacoesFaltando = setRacoesFaltando;
            this.ninjasRestantes = ninjasRestantes;
            this.setNinjasRestantes = setNinjasRestantes;
    }

    public atualizarState(evento: Eventos, vezes = 1) {
        switch (evento) {
            case Eventos.comerRacao:
                this.setRacoesFaltando(this.racoesFaltando - vezes);
                if (this.racoesFaltando - vezes <= 0) {
                    this.setGanhou(true);
                }
                break;
            case Eventos.espantarNinja:
                this.setNinjasRestantes(this.ninjasRestantes - vezes);
                if (this.ninjasRestantes - vezes <= 0) {
                    this.setGanhou(true);
                }
                break;
            case Eventos.ganharPontos:
                this.setPontuacao(this.pontuacao + vezes);
                break;
            case Eventos.pegarEspecial:
                this.setEspecialAtivo(true);
                this.setDuracaoEspecial(5);
                break;
            case Eventos.usarEspecial:
                this.setEspecialAtivo(false);
                this.setDuracaoEspecial(0);
                break;
            case Eventos.perder:
                this.setPerdeu(true);
                break;
            case Eventos.diminuirTempoEspecial:
                this.setDuracaoEspecial(this.duracaoEspecial - vezes);
                if (this.duracaoEspecial - vezes <= 0) {
                    this.setEspecialAtivo(false);
                }
                break;
            default:
                break;
        }
    }
}