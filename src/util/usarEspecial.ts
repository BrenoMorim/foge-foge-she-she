import { caracteres } from "data/caracteres";
import Eventos from "types/Eventos";
import IFase from "types/IFase";
import calculaDistancia from "./calculaDistancia";
import ManipuladorDeState from "./ManipuladorDeState";

export default function usarEspecial(fase: IFase, manipuladorDeState: ManipuladorDeState) {
    const posicaoSherlock = fase.posicaoPersonagens.sherlock;
    const posicaoNinjas = [fase.posicaoPersonagens.breno, fase.posicaoPersonagens.jaminha];
    manipuladorDeState.atualizarState(Eventos.usarEspecial, 1);
    let ninjasEspantados = 0;
    posicaoNinjas.forEach(p => {
        const distancia = calculaDistancia(p, posicaoSherlock);
        if (distancia <= 2) {
            fase.mapa[p.i][p.j] = caracteres.espacoVazio;
            ninjasEspantados++;
            p.i = -1;
            p.j = -1;
        }
    });
    return ninjasEspantados;
}