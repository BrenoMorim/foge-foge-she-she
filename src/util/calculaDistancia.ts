import IPosicao from "types/IPosicao";

export default function calculaDistancia(p1: IPosicao, p2: IPosicao) {
    return (((p1.i - p2.i) ** 2) + ((p1.j - p2.j) ** 2)) ** .5;
}