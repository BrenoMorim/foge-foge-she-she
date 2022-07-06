import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Inicio from '../pages/Inicio';
import fases_disponiveis from 'data/fases';

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

test('A página inicial deve ser renderizada corretamente', () => {
    const paginaInicio = render(<Inicio/>);
    expect(paginaInicio).toMatchSnapshot();
});

describe('A página inicial', () => {

    beforeEach(() => {
        render(<Inicio/>);
    });

    test('Deve conter o botão de iniciar jogo desabilitado se não houver fase selecionada', () => {
        const botaoJogar = screen.getByText("Jogar");
        expect(botaoJogar).toBeDisabled();
    });

    test('Deve conter select com as fases disponíveis', () => {
        const numeroDeFases = fases_disponiveis.length;
        const selecionarFase = screen.getByLabelText("Escolha uma fase:");
        expect(selecionarFase).toBeRequired();

        const fasesDisponiveis = screen.getAllByRole("option");

        // Já tem uma option por padrão
        expect(fasesDisponiveis).toHaveLength(numeroDeFases + 1); 
    });

    test('Deve conter a seção chamada', () => {
        const sectionChamada = screen.getByTestId('chamada');
        expect(sectionChamada).toBeInTheDocument();
    });

    test('Deve conseguir selecionar uma fase e então jogar', () => {
        const selecionarFase = screen.getByLabelText("Escolha uma fase:");
        fireEvent.change(selecionarFase, {
            target: {
                value: fases_disponiveis[0].id
            }
        });
        
        const botao = screen.getByText('Jogar');
        expect(botao).toBeEnabled();
        fireEvent.click(botao);
        expect(mockNavegacao).toBeCalledTimes(1);
    });
});