import { Conteiner } from "./estilos";
import Botao from "@comp/Botao";
import Cabecalho from "@comp/Cabecalho";
import Heroi from "@comp/Heroi";
import Selecionar from "@comp/Selecionar";
import Entrada from "@comp/Entrada";

export default function Inicio() {
  return (
    <Conteiner>
      <Cabecalho />
      <Heroi />
      <Botao tipo="primario" icone="editar">Label</Botao>
      <Selecionar tipo="primario" estaAtivo>Sim</Selecionar>
      <Entrada titulo="teste" />
    </Conteiner>
  )
}