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
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Criar() {
	const [estaNaDieta, defEstaNaDieta] = useState(true);
	const navegador = useNavigation();

	function lidarVoltar() {
		navegador.navigate("inicio");
	}

	function lidarEnviar() {
		navegador.navigate("criarFeedback", { estaNaDieta });
	}

	return (
		<Conteiner>
			<Topo>
				<TopoBotao onPress={lidarVoltar}>
					<TopoIcone />
				</TopoBotao>
				<TopoTexto>Nova refeição</TopoTexto>
			</Topo>
			<Formulario>
				<Entrada rotulo="Nome" />
				<Entrada rotulo="Descrição" multiline textAlignVertical="top" numberOfLines={5} />
				<FormularioLinha>
					<Entrada rotulo="Data" keyboardType="number-pad" style={{ width: 126 }} />
					<Entrada rotulo="Hora" keyboardType="number-pad" style={{ width: 126 }} />
				</FormularioLinha>
				<FormularioLinha>
					<FormularioRotulo>Está dentro da dieta?</FormularioRotulo>
					<Selecionavel tipo="primario" estaAtivo={estaNaDieta} onPress={() => defEstaNaDieta(true)}>
						Sim
					</Selecionavel>
					<Selecionavel tipo="secundario" estaAtivo={!estaNaDieta} onPress={() => defEstaNaDieta(false)}>
						Não
					</Selecionavel>
				</FormularioLinha>
				<Botao onPress={lidarEnviar}>Cadastrar refeição</Botao>
			</Formulario>
		</Conteiner>
	);
}
