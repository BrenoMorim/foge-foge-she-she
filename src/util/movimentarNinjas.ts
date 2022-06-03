import Personagens from "data/Personagens";
import { direcoes } from "types/Direcoes";
import IFase from "types/IFase";
import calculaDistancia from "./calculaDistancia";
import ehCaminho from "./ehCaminho";
import getProximaPosicao from "./getProximaPosicao";
import ManipuladorDeState from "./ManipuladorDeState";
import movimentarPersonagem from "./movimentarPersonagem";

export default function movimentarNinjas(fase: IFase, especialAtivo: boolean, manipuladorDeState: ManipuladorDeState) {
    const ninjas = [
        {
            personagem: Personagens.breno,
            posicao: fase.posicaoPersonagens.breno
        },
        {
            personagem: Personagens.jaminha,
            posicao: fase.posicaoPersonagens.jaminha
        }
    ];
    const ninjasRestantes = ninjas.filter(n => n.posicao.i !== -1);
    if (ninjasRestantes.length === 0) return;
    const listaDirecoes = [direcoes.Cima, direcoes.Baixo, direcoes.Direita, direcoes.Esquerda];
    ninjasRestantes.forEach(ninja => {
        const direcoesPossiveis = listaDirecoes.filter(direcao => ehCaminho(direcao, fase, ninja.posicao));
        const distancias = direcoesPossiveis.map(direcaoPossivel => {
            return {
                direcao: direcaoPossivel,
                distanciaSherlock: calculaDistancia(
                    fase.posicaoPersonagens.sherlock, 
                    getProximaPosicao(direcaoPossivel, ninja.posicao)
                )
            }
        });
        let direcaoEscolhida;
        if (especialAtivo) {
            direcaoEscolhida = distancias.sort((a, b) => b.distanciaSherlock - a.distanciaSherlock)[0];
        } else {
            direcaoEscolhida = distancias.sort((a, b) => a.distanciaSherlock - b.distanciaSherlock)[0];
        }
        if (direcaoEscolhida === undefined) return;
        movimentarPersonagem(fase, direcaoEscolhida.direcao, manipuladorDeState, ninja.personagem);        
    });
}