import { render, screen } from "@testing-library/react";
import InterfaceJogo from "pages/InterfaceJogo";
import React from "react";

const mockParams = jest.fn().mockReturnValue({id: 1});
jest.mock('react-router-dom', () => {
    return {
        useParams: () => mockParams
    }
});

describe('Na interface do jogo', () => {

    test('Deve ser renderizada corretamente', () => {
        const interfaceJogo = render(<InterfaceJogo/>);
        expect(interfaceJogo).toMatchSnapshot();
    });

    describe('Ao ser carregada pela primeira vez', () => {

        beforeEach(() => render(<InterfaceJogo/>));

        test('Deve conter as informações corretas', () => {
            const faseLabel = screen.getByTestId('fase-label');
            expect(faseLabel).toHaveTextContent('Tutorial');

            const pontuacao = screen.getByTestId('fase-pontuacao');
            expect(pontuacao).toHaveTextContent("0");
        });

        test('Deve conter personagens e outros elementos no mapa', () => {
            const sherlock = screen.getByAltText('sherlock');
            expect(sherlock).toBeInTheDocument();

            const breno = screen.getByAltText('breno');
            expect(breno).toBeInTheDocument();

            const jaminha = screen.getByAltText('jaminha');
            expect(jaminha).toBeInTheDocument();

            const especial = screen.getByAltText('especial');
            expect(especial).toBeInTheDocument();

            const racoes = screen.getAllByAltText('racao');
            expect(racoes).toHaveLength(4);
        });

        test('Deve conter botões de movimento, desabilitados quando necessário', () => {
            const botoes = screen.getAllByRole('button');
            expect(botoes).toHaveLength(5);

            const botaoEspecial = screen.getByTestId('especial');
            expect(botaoEspecial).toBeDisabled();

            const botaoCima = screen.getByTestId('cima');
            expect(botaoCima).toBeDisabled();
            const botaoBaixo = screen.getByTestId('baixo');
            expect(botaoBaixo).toBeEnabled();
        });
    });
});