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
	const [secoes, defSecoes] = useState<SecaoRefeicaoDTO[]>([]);
	const refeicoes = secoes.reduce<RefeicaoDTO[]>((refeicoes, secao) => {
		refeicoes.push(...secao.data);
		return refeicoes;
	}, []);
	const dentroDaDieta = refeicoes.filter((r) => r.estaNaDieta);
	const porcentagem = (dentroDaDieta.length / refeicoes.length) * 100;

	const navegador = useNavigation();

	function lidarAbrirHeroi() {
		navegador.navigate("estatisticas");
	}

	function lidarAbrirCriar() {
		navegador.navigate("criar");
	}

	function lidarAbrirRefeicao(indice: number, data: string) {
		navegador.navigate("refeicao", { indice, data });
	}

	async function buscarReifeicoesPorSecao() {
		defSecoes(await obterRefeicoesPorSecao());
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
				titulo={`${porcentagem.toFixed(2)}%`}
				descricao="das refeições dentro da dieta"
				tipo={porcentagem >= 50 ? "primario" : "secundario"}
				onPress={lidarAbrirHeroi}
			/>

			<SecaoConteiner>
				<SecaoNome>Refeições</SecaoNome>
				<Botao tipo="primario" icone="adicionar" onPress={lidarAbrirCriar}>
					Nova refeição
				</Botao>

				<SectionList
					sections={secoes}
					keyExtractor={(item, index) => item.data + item.hora + index}
					renderItem={({ item, index }) => (
						<RefeicaoCartao onPress={() => lidarAbrirRefeicao(index, item.data)} refeicao={item} />
					)}
					renderSectionHeader={({ section: { title } }) => <SecaoTitulo>{title}</SecaoTitulo>}
				/>
			</SecaoConteiner>
		</Conteiner>
	);
}
