import { caracteres } from "./caracteres";

export default function traduzCaracter(char: string) {
    switch (char) {
        case caracteres.paredeHorizontal:
            return 'parede-horizontal.svg';
        case caracteres.paredeVertical:
            return 'parede-vertical.svg';
        case caracteres.espacoVazio:
            return 'espaco-vazio.svg';
        case caracteres.cantoSE:
            return 'canto-se.svg';
        case caracteres.cantoSD:
            return 'canto-sd.svg';
        case caracteres.cantoIE:
            return 'canto-ie.svg';
        case caracteres.cantoID:
            return 'canto-id.svg';
        case caracteres.racao:
            return 'racao.svg';
        case caracteres.especial:
            return 'especial.svg';
        case caracteres.sherlock:
            return 'sherlock.png';
        case caracteres.jaminha:
            return 'jaminha.png';
        case caracteres.breno:
            return 'breno.png';
        default:
            return 'espaco-vazio.svg';
    }
}