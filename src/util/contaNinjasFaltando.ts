import { caracteres } from "data/caracteres";

export default function contaNinjasFaltando(mapa: string[][]) {
    let ninjasEncontrados = 0;
    mapa.forEach(linha => {
        linha.forEach(caracter => {
            if (caracter === caracteres.breno || caracter === caracteres.jaminha) {
                ninjasEncontrados++;
            }
        });
    });
    return ninjasEncontrados;
}