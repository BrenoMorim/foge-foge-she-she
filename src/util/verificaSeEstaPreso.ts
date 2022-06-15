import IFase from "types/IFase";
import ehCaminho from "./ehCaminho";
import { listaDirecoes } from "types/Direcoes";
import ManipuladorDeState from "./ManipuladorDeState";

export default function verificaSeEstaPreso(faseAtual: IFase, especialAtivo: boolean, manipuladorDeState: ManipuladorDeState) {
    let estaPreso = true;
    if (especialAtivo) {
      estaPreso = false;
    };
    listaDirecoes.forEach(direcao => {
      if (ehCaminho(direcao, faseAtual.mapa, faseAtual.posicaoPersonagens.sherlock)) {
        estaPreso = false;
      } 
    });
    if (estaPreso) {
      manipuladorDeState.perder();
    }
  }