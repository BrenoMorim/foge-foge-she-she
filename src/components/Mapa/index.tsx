import traduzCaracter from "util/traduzCaracter";
import './index.css';

interface Props {
    mapa: string[][]
}

export default function Mapa({mapa}: Props) {
    return (
        <table className="mapa__container">
            <tbody className="mapa">
            {mapa.map((linha, indexLinha) => {
                return (
                <tr key={indexLinha} className="mapa__linha">
                    {linha.map((caracter, indexCaracter) => {
                        const pixel = traduzCaracter(caracter);
                    return (
                        <td className="mapa__pixel" key={indexCaracter}>
                            <img src={`/assets/mapa/${pixel.imagem}`} alt={pixel.imagem.slice(0, -4)} className={`pixel__${pixel.classe}`}/>
                        </td>
                    );
                    })}
                </tr>
                );
            })}
            </tbody>
      </table>
    );
}