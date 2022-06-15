import Eventos from "types/Eventos";
import IFase from "types/IFase";

export default class ManipuladorDeState {
    private fase: IFase;
    private setFase: React.Dispatch<React.SetStateAction<IFase>>;

    constructor(
        fase: IFase,
        setFase: React.Dispatch<React.SetStateAction<IFase>>
        ) {
            this.fase = fase;
            this.setFase = setFase;
    }

    public atualizarState(evento: Eventos, vezes = 1) {
        switch (evento) {
            case Eventos.comerRacao:
                this.fase.racoesFaltando -= vezes;
                if (this.fase.racoesFaltando - vezes <= 0) {
                    this.fase.ganhou = true;
                }
                break;
            case Eventos.espantarNinja:
                this.fase.ninjasRestantes -= vezes;
                if (this.fase.ninjasRestantes - vezes <= 0) {
                    this.fase.ganhou = true;
                }
                break;
            case Eventos.ganharPontos:
                this.setFase({...this.fase, pontuacao: this.fase.pontuacao + vezes});
                break;
            case Eventos.pegarEspecial:
                this.fase.especialAtivo = true;
                this.fase.duracaoEspecial = 5;
                break;
            case Eventos.usarEspecial:
                this.fase.duracaoEspecial = 0;
                this.fase.especialAtivo = false;
                break;
            case Eventos.perder:
                this.setFase({...this.fase, perdeu: true});
                break;
            case Eventos.diminuirTempoEspecial:
                this.fase.duracaoEspecial -= vezes;
                if (this.fase.duracaoEspecial <= 0) {
                    this.fase.especialAtivo = false;
                }
                break;
            default:
                break;
        }
    }
}