import { useParams } from "react-router-dom";
import MenuPontuacao from "components/MenuPontuacao";
import Mapa from "components/Mapa";
import MenuComandos from "components/MenuComandos";
import { lazy } from "react";
import TelaFinal from "components/TelaFinal";
import useFase from "hooks/useFase";

const NotFound = lazy(() => import('pages/NotFound'));

export default function InterfaceJogo() {
  try {
    const params = useParams();
    const id = params.id ? parseInt(params.id) : 1;

    const [ fase, manipuladorDeState ] = useFase(id);
    const jogoAcabou = (fase.ganhou || fase.perdeu);
    
    return (
      <section>
        {(jogoAcabou) && <TelaFinal manipuladorDeState={manipuladorDeState} pontuacaoFinal={fase.pontuacao} vitoria={fase.ganhou}/>}
        <MenuPontuacao labelFase={fase.label} pontuacao={fase.pontuacao}/>
        <Mapa mapa={fase.mapa}/>
        <MenuComandos manipuladorDeState={manipuladorDeState} faseAtual={fase}/>
      </section>
    );
    
  } catch(error) {
    return <NotFound />;
  }
}
