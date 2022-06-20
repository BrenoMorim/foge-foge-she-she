import { useParams } from "react-router-dom";
import MenuPontuacao from "components/MenuPontuacao";
import Mapa from "components/Mapa";
import MenuComandos from "components/MenuComandos";
import { lazy, useState } from "react";
import IFase from "types/IFase";
import ManipuladorDeState from "util/ManipuladorDeState";
import TelaFinal from "components/TelaFinal";
import carregaFasePorId from "util/carregaFasePorId";

const NotFound = lazy(() => import('pages/NotFound'));

export default function InterfaceJogo() {
  const params = useParams();
  const id = params.id ? parseInt(params.id) : 1;
  const faseEncontrada = carregaFasePorId(id);
  if (faseEncontrada === undefined) return <NotFound />;
  const [fase, setFase] = useState<IFase>(faseEncontrada);

  const jogoAcabou = (fase.ganhou || fase.perdeu);
  const manipuladorDeState = new ManipuladorDeState(fase, setFase);

  return (
    <section>
      {(jogoAcabou) && <TelaFinal manipuladorDeState={manipuladorDeState} pontuacaoFinal={fase.pontuacao} vitoria={fase.ganhou}/>}
      <MenuPontuacao labelFase={fase.label} pontuacao={fase.pontuacao}/>
      <Mapa mapa={fase.mapa}/>
      <MenuComandos manipuladorDeState={manipuladorDeState} faseAtual={fase}/>
    </section>
  );
}
