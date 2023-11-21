import Cabecalho from "@comp/Cabecalho";
import { Conteiner } from "./estilos";
import Entrada from "@comp/Entrada";
import Selecionavel from "@comp/Selecionavel";
import Botao from "@comp/Botao";

export default function Criar() {
	return (
		<Conteiner>
			<Entrada rotulo="Nome" />
			<Entrada rotulo="Descrição" />
			<Entrada rotulo="Data" />
			<Entrada rotulo="Hora" />
			<Selecionavel tipo="primario">Sim</Selecionavel>
			<Selecionavel tipo="secundario">Não</Selecionavel>
      <Botao>Cadastrar refeição</Botao>
		</Conteiner>
	);
}
