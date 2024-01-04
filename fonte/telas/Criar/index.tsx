import InicioCabecalho from "@comp/InicioCabecalho";
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
import { Alert } from "react-native";
import { dataRegex, horaRegex } from "../../utilitarios/validar";
import criarRefeicao from "@arm/refeicao/criarRefeicao";

export default function Criar() {
	const [estaEnviando, defEstaEnviando] = useState(false);
	const [data, defData] = useState("");
	const [hora, defHora] = useState("");
	const [estaNaDieta, defEstaNaDieta] = useState(true);
	const [nome, defNome] = useState("");
	const [descricao, defDescricao] = useState("");
	const navegador = useNavigation();

	function lidarVoltar() {
		navegador.navigate("inicio");
	}

	async function lidarEnviar() {
		try {
			if (nome.trim() && dataRegex.test(data) && horaRegex.test(hora)) {
				defEstaEnviando(true);
				await criarRefeicao({ nome, descricao, data, hora, estaNaDieta });
				navegador.navigate("criarFeedback", { estaNaDieta });
			}
		} catch (erro) {
			console.log(erro);
			Alert.alert("Erro", "Não foi possível criar este registro.");
			defEstaEnviando(false);
		}
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
				<Entrada rotulo="Nome" value={nome} onChangeText={defNome} />
				<Entrada
					rotulo="Descrição"
					value={descricao}
					onChangeText={defDescricao}
					multiline
					textAlignVertical="top"
					numberOfLines={5}
				/>
				<FormularioLinha>
					<Entrada
						rotulo="Data"
						value={data}
						maxLength={10}
						onChangeText={(texto) => {
							if (texto.length == 2 || texto.length == 5) texto += "/";
							defData(texto);
						}}
						keyboardType="number-pad"
						style={{ width: 126 }}
					/>
					<Entrada
						rotulo="Hora"
						value={hora}
						maxLength={5}
						onChangeText={(texto) => {
							if (texto.length == 2) texto += ":";
							defHora(texto);
						}}
						keyboardType="number-pad"
						style={{ width: 126 }}
					/>
				</FormularioLinha>
				<FormularioLinha>
					<FormularioRotulo>Está dentro da dieta?</FormularioRotulo>
					<Selecionavel
						tipo="primario"
						estaAtivo={estaNaDieta}
						onPress={() => defEstaNaDieta(true)}
					>
						Sim
					</Selecionavel>
					<Selecionavel
						tipo="secundario"
						estaAtivo={!estaNaDieta}
						onPress={() => defEstaNaDieta(false)}
					>
						Não
					</Selecionavel>
				</FormularioLinha>
				<Botao onPress={lidarEnviar} estaCarregando={estaEnviando}>
					Cadastrar refeição
				</Botao>
			</Formulario>
		</Conteiner>
	);
}
