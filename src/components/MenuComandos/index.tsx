import styles from "./MenuComandos.module.scss";
import ehCaminho from "util/ehCaminho";
import { direcoes, listaDirecoes } from "types/Direcoes";
import IFase from "types/IFase";
import movimentarPersonagem from "util/movimentarPersonagem";
import Personagens from "data/Personagens";
import ManipuladorDeState from "util/ManipuladorDeState";
import movimentarNinjas from "util/movimentarNinjas";
import verificaSeEstaPreso from "util/verificaSeEstaPreso";
import { useEffect, useState } from "react";

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
      movimentarNinjas(faseAtual, faseAtual.especialAtivo, manipuladorDeState);
      setUltimoComando(!ultimoComando);
    }

  useEffect(() => {
    verificaSeEstaPreso(faseAtual, faseAtual.especialAtivo, manipuladorDeState);
  }, [ultimoComando]);
  
  const jogoAcabou = (faseAtual.ganhou || faseAtual.perdeu);

  return (
    <>
      <section className={styles.comandos}>
        {listaDirecoes.map((direcao, index) => {
          return (
            <button
              key={index}
              onClick={() => executaComando(direcao)}
              disabled={(!ehCaminho(direcao, faseAtual.mapa, faseAtual.posicaoPersonagens.sherlock) || jogoAcabou)}
              className={styles.comandos__botao}
            >
              <img alt={direcao.toString} src={`/assets/botoes/${direcao.toString}.svg`}/>
            </button>
          );
        })}
        <button
          onClick={() => executaComando(direcoes.Especial)}
          disabled={!faseAtual.especialAtivo || jogoAcabou}
          className={styles.comandos__botao}
        >
          <img src="/assets/botoes/especial.svg" alt="Especial"/>
        </button>
      </section>
      {(faseAtual.especialAtivo && faseAtual.duracaoEspecial > 0) && <p className={styles.descricaoEspecial}>Turnos restantes com especial: {faseAtual.duracaoEspecial}</p>}
      {(faseAtual.especialAtivo && !jogoAcabou) && <p className={styles.descricaoEspecial}>Você pegou o especial!<br/> Aperte o botão para espantar todos os ninjas em até 2 quadradinhos de distância!</p>}
    </>
  );
}
