import { Conteiner } from "./estilos";
import Cabecalho from "@comp/Cabecalho";
import Heroi from "@comp/Heroi";

export default function Inicio() {
  return (
    <Conteiner>
      <Cabecalho />
      <Heroi />
    </Conteiner>
  )
}