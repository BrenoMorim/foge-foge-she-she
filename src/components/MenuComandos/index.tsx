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
  ganhou: boolean;
  perdeu: boolean;
  especialAtivo: boolean;
  duracaoEspecial: number;
  manipuladorDeState: ManipuladorDeState;
}

export default function MenuComandos({
  faseAtual,
  ganhou,
  perdeu,
  especialAtivo,
  duracaoEspecial,
  manipuladorDeState
}: Props) {

  const [ultimoComando, setUltimoComando] = useState(false);

  function executaComando(direcao: typeof direcoes.Baixo) {
    movimentarPersonagem(
      faseAtual,
      direcao,
      manipuladorDeState,
      Personagens.sherlock,
      especialAtivo
      );
      movimentarNinjas(faseAtual, especialAtivo, manipuladorDeState);
      setUltimoComando(!ultimoComando);
    }

  useEffect(() => {
    verificaSeEstaPreso(faseAtual, especialAtivo, manipuladorDeState);
  }, [ultimoComando]);
  
  const jogoAcabou = (ganhou || perdeu);

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
          disabled={!especialAtivo || jogoAcabou}
          className={styles.comandos__botao}
        >
          <img src="/assets/botoes/especial.svg" alt="Especial"/>
        </button>
      </section>
      {(especialAtivo && duracaoEspecial > 0) && <p className={styles.descricaoEspecial}>Turnos restantes com especial: {duracaoEspecial}</p>}
      {(especialAtivo && !jogoAcabou) && <p className={styles.descricaoEspecial}>Você pegou o especial!<br/> Aperte o botão para espantar todos os ninjas em até 2 quadradinhos de distância!</p>}
    </>
  );
}
