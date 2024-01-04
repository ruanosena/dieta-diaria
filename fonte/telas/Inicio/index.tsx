import { Conteiner, SecaoConteiner, SecaoNome, SecaoTitulo } from "./estilos";
import InicioCabecalho from "@comp/InicioCabecalho";
import Heroi from "@comp/Heroi";
import Botao from "@comp/Botao";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import RefeicaoCartao from "@comp/RefeicaoCartao";
import { useCallback, useState } from "react";
import { RefeicaoDTO, SecaoRefeicaoDTO } from "@arm/refeicao/refeicaoDTO";
import { SectionList, Text } from "react-native";
import obterRefeicoesPorSecao from "@arm/refeicao/obterRefeicoes";

export default function Inicio() {
	const [refeicoes, defRefeicoes] = useState<SecaoRefeicaoDTO[]>([]);

	const navegador = useNavigation();

	function lidarAbrirHeroi() {
		navegador.navigate("estatisticas");
	}

	function lidarAbrirCriar() {
		navegador.navigate("criar");
	}

	function lidarAbrirRefeicao() {
		navegador.navigate("refeicao");
	}

	async function buscarReifeicoesPorSecao() {
		defRefeicoes(await obterRefeicoesPorSecao());
	}

	useFocusEffect(
		useCallback(() => {
			buscarReifeicoesPorSecao();
		}, [])
	);

	return (
		<Conteiner>
			<InicioCabecalho />
			<Heroi
				titulo="90,86%"
				descricao="das refeições dentro da dieta"
				tipo="primario"
				onPress={lidarAbrirHeroi}
			/>

			<SecaoConteiner>
				<SecaoNome>Refeições</SecaoNome>
				<Botao tipo="primario" icone="adicionar" onPress={lidarAbrirCriar}>
					Nova refeição
				</Botao>

				<SectionList
					sections={refeicoes}
					keyExtractor={(item, index) => item.hora + index}
					renderItem={({ item }) => <RefeicaoCartao onPress={lidarAbrirRefeicao} refeicao={item} />}
					renderSectionHeader={({ section: { title } }) => <SecaoTitulo>{title}</SecaoTitulo>}
				/>
			</SecaoConteiner>
		</Conteiner>
	);
}
