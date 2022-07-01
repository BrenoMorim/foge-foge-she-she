import { pixelsMapa } from "../data/caracteres";

/**
 * Traduz um caracter simples em um objeto com as informações necessárias
 * para renderizar os pixels no componente Mapa
 * 
 * @param char caracter do mapa na sua versão string
 * @returns pixelEncontrado, objeto que contém o caminho da imagem que deve ser renderizada e sua classe css
 */

export default function traduzCaracter(char: string) {
    const pixelEncontrado = pixelsMapa.find(pixel => pixel.caracter === char);
    if (pixelEncontrado === undefined) return pixelsMapa[0];
    return pixelEncontrado;
}