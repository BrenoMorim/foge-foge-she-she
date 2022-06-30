import { pixelsMapa } from "../data/caracteres";

export default function traduzCaracter(char: string) {
    const pixelEncontrado = pixelsMapa.find(pixel => pixel.caracter === char);
    if (pixelEncontrado === undefined) return pixelsMapa[0];
    return pixelEncontrado;
}