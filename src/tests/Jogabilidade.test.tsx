import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import InterfaceJogo from "pages/InterfaceJogo";
import React from "react";
import Pontuacao from "data/Pontuacao";

const mockParams = jest.fn().mockReturnValue({id: 1});
const mockNavegacao = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        useParams: () => mockParams,
        useNavigate: () => mockNavegacao
    }
});

describe('O usuário, ao jogar numa fase', () => {

    beforeEach(() => {render(<InterfaceJogo/>)});

    afterEach(() =>cleanup());

    test('Deve conseguir pegar o especial e ter sua pontuação atualizada', () => {
        const pixelPosicaoEspecial = screen.getByAltText('especial');
        const botaoEspecial = screen.getByTestId('especial');
        const pontuacao = screen.getByTestId('fase-pontuacao');

        // Antes de pegar o especial
        expect(pixelPosicaoEspecial).toHaveAttribute('alt', 'especial');
        expect(botaoEspecial).toBeDisabled();
        expect(pontuacao).toHaveTextContent("0");

        const botaoBaixo = screen.getByTestId('baixo');
        fireEvent.click(botaoBaixo);

        // Após o movimento do personagem
        // ele ocupa o lugar do especial e sua pontuação aumenta
        expect(pixelPosicaoEspecial).toHaveAttribute('alt', 'sherlock');
        expect(botaoEspecial).toBeEnabled();
        expect(pontuacao).toHaveTextContent(String(Pontuacao.aoPegarEspecial + Pontuacao.aoSeMover));
        
        const descricaoEspecial = screen.getByTestId('descricao-especial');
        expect(descricaoEspecial).toBeInTheDocument();
    });

    test('O jogador deve conseguir ganhar o jogo usando o especial e então poder voltar para o início', () => {
        const botaoBaixo = screen.getByTestId('baixo');
        fireEvent.click(botaoBaixo);
        
        // Jogador pegou especial e o usou
        const botaoEspecial = screen.getByTestId('especial');
        expect(botaoEspecial).toBeEnabled();
        fireEvent.click(botaoEspecial);
        expect(botaoEspecial).toBeDisabled();

        // Os ninjas foram espantados, assim saindo da tela
        const breno = screen.queryByAltText('breno');
        const jaminha = screen.queryByAltText('jaminha');
        expect(breno).not.toBeInTheDocument();
        expect(jaminha).not.toBeInTheDocument();
        
        // Aparece tela de vitória com mensagem e botão para voltar
        const mensagemVitoria = screen.queryByText('Parabéns! Você ganhou =)');
        expect(mensagemVitoria).toBeInTheDocument();
        
        const botaoVoltar = screen.getByText('Voltar para o Início'); 
        expect(botaoVoltar).toBeInTheDocument();
        
        fireEvent.click(botaoVoltar);
        expect(mockNavegacao).toBeCalledTimes(1);
    });

    test('O jogador pode perder o especial depois de alguns turnos', () => {
        const botaoBaixo = screen.getByTestId('baixo');
        const botaoCima = screen.getByTestId('cima');
        
        // Jogador pegou especial
        fireEvent.click(botaoBaixo);
        const botaoEspecial = screen.getByTestId('especial');
        expect(botaoEspecial).toBeEnabled();
        let descricaoEspecial = screen.queryByTestId('descricao-especial');
        expect(descricaoEspecial).toBeInTheDocument();

        // Esperar até perder o especial
        fireEvent.click(botaoCima);
        fireEvent.click(botaoBaixo);
        fireEvent.click(botaoCima);
        fireEvent.click(botaoBaixo);
        fireEvent.click(botaoCima);

        // Especial foi perdido
        expect(botaoEspecial).toBeDisabled();
        descricaoEspecial = screen.queryByTestId('descricao-especial');
        expect(descricaoEspecial).not.toBeInTheDocument();
    });

    test('O jogador pode ser pego e então perder a partida', () => {
        const botaoBaixo = screen.getByTestId('baixo');
        const botaoDireita = screen.getByTestId('direita');
        
        // O jogador vai ser pego por se mover sem cuidado
        fireEvent.click(botaoBaixo);
        fireEvent.click(botaoDireita);
        fireEvent.click(botaoDireita);

        // O jogador foi pego
        const sherlock = screen.queryByAltText('sherlock');
        expect(sherlock).not.toBeInTheDocument(); 

        // Tela final com mensagem de derrota aparece
        const mensagemDerrota = screen.queryByText('Que pena! Você perdeu =(');
        expect(mensagemDerrota).toBeInTheDocument();

        const botaoTentarNovamente = screen.getByText('Tentar Novamente');
        expect(botaoTentarNovamente).toBeEnabled();
    });
});