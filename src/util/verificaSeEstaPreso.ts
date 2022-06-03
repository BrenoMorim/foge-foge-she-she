import IFase from "types/IFase";
import ehCaminho from "./ehCaminho";
import { listaDirecoes } from "types/Direcoes";
import ManipuladorDeState from "./ManipuladorDeState";
import Eventos from "types/Eventos";

export default function verificaSeEstaPreso(faseAtual: IFase, especialAtivo: boolean, manipuladorDeState: ManipuladorDeState) {
    let estaPreso = true;
    if (especialAtivo) {
      estaPreso = false;
    };
    listaDirecoes.forEach(direcao => {
      if (ehCaminho(direcao, faseAtual, faseAtual.posicaoPersonagens.sherlock)) {
        estaPreso = false;
      } 
    });
    if (estaPreso) {
      manipuladorDeState.atualizarState(Eventos.perder);
    }
  }