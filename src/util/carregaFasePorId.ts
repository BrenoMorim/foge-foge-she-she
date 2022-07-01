import fases_disponiveis from "data/fases";
import contaNinjasFaltando from "./contaNinjasFaltando";
import contaRacoesFaltando from "./contaRacoesFaltando";
import getPosicaoPersonagens from "./getPosicaoPersonagens";

/**
 * Recupera uma fase do arquivo data/fases.ts, incluindo outras informações
 * necessárias relacionadas ao estado da fase, como a posição dos personagens, 
 * rações e ninjas faltando, etc.
 * 
 * @param id id da fase no arquivo data/fases.ts
 * @returns objeto com todas as informações da fase
 */

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