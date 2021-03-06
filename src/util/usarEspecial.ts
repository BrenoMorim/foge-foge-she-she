import { caracteres } from "data/caracteres";
import Personagens from "data/Personagens";
import IFase from "types/IFase";
import calculaDistancia from "./calculaDistancia";
import ManipuladorDeState from "./ManipuladorDeState";

/**
 * Usa o especial, fazendo as chamadas dos métodos no ManipuladorDeState
 * para alterar o que for necessário no estado da fase atual,
 * ninjas a uma distância do sherlock menor ou igual a dois são espantados,
 * sendo apagados do mapa.  
 * 
 * @returns quantidade de ninjas espantados
 */

export default function usarEspecial(fase: IFase, manipuladorDeState: ManipuladorDeState) {
    const posicaoSherlock = fase.posicaoPersonagens.sherlock;
    const ninjas = [Personagens.breno, Personagens.jaminha];
    manipuladorDeState.gastarEspecial();
    let ninjasEspantados = 0;
    ninjas.forEach(ninja => {
        const posicaoNinja = fase.posicaoPersonagens[ninja];
        const distancia = calculaDistancia(posicaoNinja, posicaoSherlock);
        if (distancia <= 2) {
            fase.mapa[posicaoNinja.i][posicaoNinja.j] = caracteres.espacoVazio;
            ninjasEspantados++;
            manipuladorDeState.removerPersonagemDoMapa(ninja);
        }
    });
    return ninjasEspantados;
}