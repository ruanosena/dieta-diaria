import Cabecalho from "@comp/Cabecalho";
import {
	Conteiner,
	Formulario,
	FormularioLinha,
	FormularioRotulo,
	Topo,
	TopoBotao,
	TopoIcone,
	TopoTexto,
} from "./estilos";
import Entrada from "@comp/Entrada";
import Selecionavel from "@comp/Selecionavel";
import Botao from "@comp/Botao";

export default function Criar() {
	return (
		<Conteiner>
			<Topo>
				<TopoBotao>
					<TopoIcone />
				</TopoBotao>
				<TopoTexto>Nova refeição</TopoTexto>
			</Topo>
			<Formulario>
				<Entrada rotulo="Nome" />
				<Entrada rotulo="Descrição" />
				<Entrada rotulo="Data" />
				<Entrada rotulo="Hora" />
				<FormularioLinha>
					<FormularioRotulo>Está dentro da dieta?</FormularioRotulo>
					<Selecionavel tipo="primario">Sim</Selecionavel>
					<Selecionavel tipo="secundario">Não</Selecionavel>
				</FormularioLinha>
				<Botao>Cadastrar refeição</Botao>
			</Formulario>
		</Conteiner>
	);
}
