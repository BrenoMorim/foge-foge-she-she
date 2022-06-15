import fases_disponiveis from "data/fases";
import contaNinjasFaltando from "./contaNinjasFaltando";
import contaRacoesFaltando from "./contaRacoesFaltando";
import getPosicaoPersonagens from "./getPosicaoPersonagens";

export default function carregaFasePorId(id: number) {
    const fase = fases_disponiveis.find(f => f.id == id);
    
    if (fase === undefined) return;

    fase.posicaoPersonagens = getPosicaoPersonagens(fase.mapa);
    fase.especialAtivo = false;
    fase.duracaoEspecial = 0;
    fase.pontuacao = 0;
    fase.racoesFaltando = contaRacoesFaltando(fase.mapa);
    fase.ninjasRestantes = contaNinjasFaltando(fase.mapa);
    fase.perdeu = fase.posicaoPersonagens.sherlock.i === -1;
    fase.ganhou = (fase.ninjasRestantes === 0 || fase.racoesFaltando === 0);
    return fase;
}