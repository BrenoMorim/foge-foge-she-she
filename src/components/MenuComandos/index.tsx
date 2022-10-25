import ehCaminho from "util/ehCaminho";
import { direcoes, listaDirecoes } from "types/Direcoes";
import IFase from "types/IFase";
import movimentarPersonagem from "util/movimentarPersonagem";
import Personagens from "data/Personagens";
import ManipuladorDeState from "util/ManipuladorDeState";
import verificaSeEstaPreso from "util/verificaSeEstaPreso";
import { useEffect, useState } from "react";
import "./index.css";
import "styles/base.css";
import BotaoComando from "./components/BotaoComando";

interface Props {
  faseAtual: IFase;
  manipuladorDeState: ManipuladorDeState;
}

export default function MenuComandos({
  faseAtual,
  manipuladorDeState
}: Props) {

  const [verificacao, alternarVerificacao] = useState(false);

  function executaComando(direcao: typeof direcoes.Baixo) {
    movimentarPersonagem(
      faseAtual,
      direcao,
      manipuladorDeState,
      Personagens.sherlock,
      faseAtual.especialAtivo
      );
      alternarVerificacao(!verificacao);
    }

  useEffect(() => {
    verificaSeEstaPreso(faseAtual, faseAtual.especialAtivo, manipuladorDeState);
  }, [verificacao]);
  
  const jogoAcabou = (faseAtual.ganhou || faseAtual.perdeu);

  return (
    <>
      <section className="comandos animate__animated animate__backInRight">
        {listaDirecoes.map((direcao) => (
          <BotaoComando 
            key={direcao.toString} 
            direcao={direcao} 
            funcaoOnClick={executaComando} 
            desabilitado={!ehCaminho(direcao, faseAtual.mapa, faseAtual.posicaoPersonagens.sherlock)}/>
        ))}
        <BotaoComando direcao={direcoes.Especial} funcaoOnClick={executaComando} desabilitado={!faseAtual.especialAtivo}/>
      </section>
      {(faseAtual.especialAtivo && faseAtual.duracaoEspecial > 0) && <p className="base__painel-roxo comandos__descricao-especial animate__animated animate__fadeIn">Turnos restantes com especial: {faseAtual.duracaoEspecial}</p>}
      {(faseAtual.especialAtivo && !jogoAcabou && faseAtual.label=="Tutorial") && <p className="base__painel-roxo comandos__descricao-especial animate__animated animate__fadeIn" data-testid="descricao-especial">Você pegou o especial!<br/> Aperte o botão para espantar todos os ninjas em até 2 quadradinhos de distância!</p>}
    </>
  );
}
