import fases_disponiveis from "data/fases";

export default function carregaFasePorId(id: number) {
    return fases_disponiveis.find(f => f.id === id);
}