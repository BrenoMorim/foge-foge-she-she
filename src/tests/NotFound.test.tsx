import { fireEvent, render, screen } from "@testing-library/react";
import NotFound from "pages/NotFound";
import React from "react";

const mockNavegacao = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

describe('A página NotFound', () => {
    test('Deve ser renderizada corretamente', () => {
        const notFound = render(<NotFound/>);
        expect(notFound).toMatchSnapshot();
    });

    test('Deve conter botão para voltar para a última página', () => {
        render(<NotFound/>);

        const botaoVoltar = screen.getByText('Voltar');
        expect(botaoVoltar).toBeEnabled();

        fireEvent.click(botaoVoltar);
        expect(mockNavegacao).toBeCalledTimes(1);
    });
});