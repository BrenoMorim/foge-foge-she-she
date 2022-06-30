export const caracteres = {
    espacoVazio: ' ',
    racao: '*',
    sherlock: 'S',
    breno: 'B',
    jaminha: 'J',
    especial: 'E',
    paredeVertical: '|',
    paredeHorizontal: '-',
    cantoSE: '[',
    cantoSD: ']',
    cantoIE: '{',
    cantoID: '}'
}

export const pixelsMapa = [
    {
        caracter: caracteres.espacoVazio,
        imagem: 'espaco-vazio.svg',
        classe: 'espaco-vazio'
    },
    {
        caracter: caracteres.racao,
        imagem: 'racao.svg',
        classe: 'racao'
    },
    {
        caracter: caracteres.sherlock,
        imagem: 'sherlock.png',
        classe: 'personagem'
    },
    {
        caracter: caracteres.breno,
        imagem: 'breno.png',
        classe: 'personagem'
    },
    {
        caracter: caracteres.jaminha,
        imagem: 'jaminha.png',
        classe: 'personagem'
    },
    {
        caracter: caracteres.especial,
        imagem: 'especial.svg',
        classe: 'especial'
    },
    {
        caracter: caracteres.paredeVertical,
        imagem: 'parede.svg',
        classe: 'parede-vertical'
    },
    {
        caracter: caracteres.paredeHorizontal,
        imagem: 'parede.svg',
        classe: 'parede-horizontal'
    },
    {
        caracter: caracteres.cantoSE,
        imagem: 'canto.svg',
        classe: 'canto-superior-esquerdo'
    },
    {
        caracter: caracteres.cantoSD,
        imagem: 'canto.svg',
        classe: 'canto-superior-direito'
    },
    {
        caracter: caracteres.cantoIE,
        imagem: 'canto.svg',
        classe: 'canto-inferior-esquerdo'
    },
    {
        caracter: caracteres.cantoID,
        imagem: 'canto.svg',
        classe: 'canto-inferior-direito'
    }
]