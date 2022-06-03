import { useParams } from "react-router-dom";
import MenuPontuacao from "components/MenuPontuacao";
import Mapa from "components/Mapa";
import MenuComandos from "components/MenuComandos";
import { lazy, useState } from "react";
import IFase from "types/IFase";
import contaRacoesFaltando from "util/contaRacoesFaltando";
import ManipuladorDeState from "util/ManipuladorDeState";
import TelaFinal from "components/TelaFinal";
import carregaFasePorId from "util/carregaFasePorId";
import contaNinjasFaltando from "util/contaNinjasFaltando";

const NotFound = lazy(() => import('pages/NotFound'));

export default function InterfaceJogo() {
  const params = useParams();
  const id = params.id ? parseInt(params.id) : 1;
  const faseEncontrada = carregaFasePorId(id);

  if (faseEncontrada === undefined) return <NotFound />;

  const [fase, _] = useState<IFase>(faseEncontrada);
  const [pontuacao, setPontuacao] = useState(0);
  const [perdeu, setPerdeu] = useState(false);
  const [racoesFaltando, setRacoesFaltando] = useState(contaRacoesFaltando(fase.mapa));
  const [ninjasRestantes, setNinjasRestantes] = useState(contaNinjasFaltando(fase.mapa));
  const [especialAtivo, setEspecialAtivo] = useState(false);
  const [ganhou, setGanhou] = useState((ninjasRestantes === 0 || racoesFaltando === 0));
  const [duracaoEspecial, setDuracaoEspecial] = useState(0);

  const jogoAcabou = (ganhou || perdeu);
  const manipuladorDeState = new ManipuladorDeState(
    pontuacao, setPontuacao, duracaoEspecial, setDuracaoEspecial, setGanhou, setPerdeu, setEspecialAtivo, racoesFaltando, setRacoesFaltando, ninjasRestantes, setNinjasRestantes);

  return (
    <section>
      {(jogoAcabou) && <TelaFinal pontuacaoFinal={pontuacao} vitoria={ganhou}/>}
      <MenuPontuacao labelFase={fase.label} pontuacao={pontuacao}/>
      <Mapa fase={fase}/>
      <MenuComandos ganhou={ganhou} perdeu={perdeu} manipuladorDeState={manipuladorDeState} especialAtivo={especialAtivo} duracaoEspecial={duracaoEspecial} faseAtual={fase}/>
    </section>
  );
}
