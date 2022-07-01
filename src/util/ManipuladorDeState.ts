import Personagens from "data/Personagens";
import IFase from "types/IFase";
import carregaFasePorId from "./carregaFasePorId";

/**
 * Classe responsável por fazer alterações no estado da fase atual,
 * fazendo as chamadas de setFase somente quando necessário para 
 * atualizar os componentes da tela.
 */

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

    /**
     * O método ganharPontos faz a chamada de setFase, pois ele é chamado toda
     * vez que o personagem se move, fazendo com que os componentes sejam atualizados
     */
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

    /**
     * O método perder também faz a chamada de setFase, porque o quando o 
     * personagem principal está preso é necessário fazer o jogo acabar, e sem
     * o setFase, a atualização do estado não acontece e a tela de fim de jogo não
     * vai aparecer
     */
    public perder() {
        this.fase.perdeu = true;
        this.setFase({...this.fase});
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

    /**
     * Carrega uma nova fase para ser jogada, permite que o jogador vá
     * para a próxima fase assim que ganhar a fase atual, sem ser necessário
     * voltar para a página inicial e selecionar a fase manualmente
     */
    public carregarFase(idFase: number) {
        const faseCarregada = carregaFasePorId(idFase);
        if (faseCarregada === undefined) return;
        this.setFase({...faseCarregada});
    }
}