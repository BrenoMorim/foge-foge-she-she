import Chamada from "components/Chamada";
import Footer from "components/Footer";
import MenuEscolherFase from "components/MenuEscolherFase";

export default function Inicio() {
  return (
    <section>
      <MenuEscolherFase />
      <Chamada />
    </section>
  );
}