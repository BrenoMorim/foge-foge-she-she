import Personagens from "data/Personagens";
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

    public comerRacao() {
        this.fase.racoesFaltando -= 1;
        if (this.fase.racoesFaltando <= 0) {
            this.ganhar();
        }
    }

    public espantarNinjas(quantidade: number) {
        this.fase.ninjasRestantes -= quantidade;
        if (this.fase.ninjasRestantes <= 0) {
            this.ganhar();
        }
    }

    public ganharPontos(pontuacaoGanha: number) {
        this.setFase({...this.fase, pontuacao: this.fase.pontuacao + pontuacaoGanha});
    }

    public pegarEspecial() {
        this.fase.especialAtivo = true;
        this.fase.duracaoEspecial = 5;
    }

    public gastarEspecial() {
        this.fase.especialAtivo = false;
        this.fase.duracaoEspecial = 0;
    }

    public ganhar() {
        this.fase.ganhou = true;
    }

    public perder() {
        this.fase.perdeu = true;
    }

    public diminuirDuracaoEspecial() {
        this.fase.duracaoEspecial -= 1;
        if (this.fase.duracaoEspecial <= 0) {
            this.fase.especialAtivo = false;
        }
    }

    public removerPersonagemDoMapa(personagem: Personagens) {
        this.fase.posicaoPersonagens[personagem] = {i: -1, j: -1};
    }
}