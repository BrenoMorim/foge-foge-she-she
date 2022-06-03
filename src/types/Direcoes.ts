export const direcoes = {
    Cima: {i: -1, j: 0, toString: 'cima'},
    Esquerda: {i: 0, j: -1, toString: 'esquerda'},
    Baixo: {i: 1, j: 0, toString: 'baixo'},
    Direita: {i: 0, j: 1, toString: 'direita'},
    Especial: {i: 0, j: 0, toString: 'especial'}
}

export const listaDirecoes = [
    direcoes.Cima,
    direcoes.Baixo,
    direcoes.Esquerda,
    direcoes.Direita,
  ];