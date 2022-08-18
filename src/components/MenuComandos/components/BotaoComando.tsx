import { direcoes } from "types/Direcoes";

interface Props {
    direcao: typeof direcoes.Baixo,
    desabilitado: boolean,
    funcaoOnClick: Function
}

export default function BotaoComando({direcao, desabilitado, funcaoOnClick}: Props) {

    const sourceImagem = (direcao == direcoes.Especial) ? "especial" : "seta"; 

    return (
        <button
            onClick={() => funcaoOnClick(direcao)}
            disabled={desabilitado}
            className="comandos__botao"
            data-testid={direcao.toString}
        >
            <img alt={`botão ${direcao.toString}`} src={`/assets/botoes/${sourceImagem}.svg`} className={`botao__imagem botao__imagem--${direcao.toString}`}/>
        </button>
    );
}