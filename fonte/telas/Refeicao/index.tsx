import TelaCabecalho from "@comp/TelaCabecalho";
import { Conteiner, ConteudoConteiner, DataHora, Descricao, Subtitulo, Titulo } from "./estilos";
import Selecionavel from "@comp/Selecionavel";
import Botao from "@comp/Botao";

export default function Refeicao() {
	return (
		<Conteiner>
			<TelaCabecalho>Refeição</TelaCabecalho>
			<ConteudoConteiner>
				<Titulo>Sanduíche</Titulo>
				<Descricao>Sanduíche de pão integral com atum e salada de alface e tomate</Descricao>
				<Subtitulo>Data e hora</Subtitulo>
				<DataHora>12/08/2022 às 16:00</DataHora>
				<Selecionavel style={{ borderRadius: 50, width: "auto" }}>dentro da dieta</Selecionavel>
			</ConteudoConteiner>
			<Botao icone="editar">Editar refeição</Botao>
			<Botao icone="deletar" tipo="secundario">Excluir refeição</Botao>
		</Conteiner>
	);
}
