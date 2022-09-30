import { useState } from "react";
import IFase from "types/IFase";
import carregaFasePorId from "util/carregaFasePorId";
import ManipuladorDeState from "util/ManipuladorDeState";

export default function useFase(id: number): [IFase, ManipuladorDeState] {
    const faseEncontrada = carregaFasePorId(id);
    if (faseEncontrada === undefined) throw new Error("Fase não encontrada =(");

    const [fase, setFase] = useState<IFase>(faseEncontrada);
    const manipuladorDeState = new ManipuladorDeState(fase, setFase);

    return [fase, manipuladorDeState];
}