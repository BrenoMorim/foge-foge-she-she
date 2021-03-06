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

interface Props {
  faseAtual: IFase;
  manipuladorDeState: ManipuladorDeState;
}

export default function MenuComandos({
  faseAtual,
  manipuladorDeState
}: Props) {

  const [ultimoComando, setUltimoComando] = useState(false);

  function executaComando(direcao: typeof direcoes.Baixo) {
    movimentarPersonagem(
      faseAtual,
      direcao,
      manipuladorDeState,
      Personagens.sherlock,
      faseAtual.especialAtivo
      );
      setUltimoComando(!ultimoComando);
    }

  useEffect(() => {
    verificaSeEstaPreso(faseAtual, faseAtual.especialAtivo, manipuladorDeState);
  }, [ultimoComando]);
  
  const jogoAcabou = (faseAtual.ganhou || faseAtual.perdeu);

  return (
    <>
      <section className="comandos">
        {listaDirecoes.map((direcao, index) => {
          return (
            <button
              key={index}
              onClick={() => executaComando(direcao)}
              disabled={(!ehCaminho(direcao, faseAtual.mapa, faseAtual.posicaoPersonagens.sherlock) || jogoAcabou)}
              className="comandos__botao"
              data-testid={direcao.toString}
            >
              <img alt={direcao.toString} src={"/assets/botoes/seta.svg"} className={`botao__imagem botao__imagem--${direcao.toString}`}/>
            </button>
          );
        })}
        <button
          onClick={() => executaComando(direcoes.Especial)}
          disabled={!faseAtual.especialAtivo || jogoAcabou}
          className="comandos__botao"
          data-testid="especial"
        >
          <img src="/assets/botoes/especial.svg" alt="Especial" className="botao__imagem"/>
        </button>
      </section>
      {(faseAtual.especialAtivo && faseAtual.duracaoEspecial > 0) && <p className="base__painel-roxo comandos__descricao-especial">Turnos restantes com especial: {faseAtual.duracaoEspecial}</p>}
      {(faseAtual.especialAtivo && !jogoAcabou) && <p className="base__painel-roxo comandos__descricao-especial" data-testid="descricao-especial">Voc?? pegou o especial!<br/> Aperte o bot??o para espantar todos os ninjas em at?? 2 quadradinhos de dist??ncia!</p>}
    </>
  );
}
