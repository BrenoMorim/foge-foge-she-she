import traduzCaracter from "data/traduzCaracter";
import IFase from "types/IFase";
import styles from './Mapa.module.scss';

interface Props {
    fase: IFase
}

export default function Mapa({fase}: Props) {
    return (
        <table className={styles.container}>
            <tbody className={styles.mapa}>
            {fase.mapa.map((linha, indexLinha) => {
                return (
                <tr key={indexLinha} className={styles.mapa__linha}>
                    {linha.map((pixel, indexPixel) => {
                    return (
                        <td className={styles.mapa__pixel} key={indexPixel}>
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