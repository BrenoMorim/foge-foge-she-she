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
                    {linha.map((pixel, indexPixel) => {
                    return (
                        <td className="mapa__pixel" key={indexPixel}>
                            <img src={`/assets/mapa/${traduzCaracter(pixel)}`} />
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