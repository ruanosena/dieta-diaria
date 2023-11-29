import { Conteiner, SecaoConteiner, SecaoNome, SecaoTitulo } from "./estilos";
import Cabecalho from "@comp/Cabecalho";
import Heroi from "@comp/Heroi";
import Botao from "@comp/Botao";
import { useNavigation } from "@react-navigation/native";
import RefeicaoCartao from "@comp/RefeicaoCartao";
import { useState } from "react";
import { RefeicaoDTO, SecaoRefeicaoDTO } from "@arm/refeicao/RefeicaoDTO";
import { SectionList, Text } from "react-native";

export default function Inicio() {
	const [refeicoes, defRefeicoes] = useState<SecaoRefeicaoDTO[]>([
		{
			date: "12.08.2023",
			data: [
				{ nome: "X-tudo", descricao: "", data: "12.08.2023", hora: "20:00", estaNaDieta: false },
				{
					nome: "Whey protein com leite",
					descricao: "",
					data: "12.08.2023",
					hora: "16:00",
					estaNaDieta: true,
				},
			],
		},
		{
			date: "11.08.2023",
			data: [
				{
					nome: "Salada cesar com frango",
					descricao: "",
					data: "11.08.2023",
					hora: "12:30",
					estaNaDieta: true,
				},
				{
					nome: "Vitamina de banana",
					descricao: "",
					data: "11.08.2023",
					hora: "09:30",
					estaNaDieta: true,
				},
			],
		},
		{
			date: "11.08.2023",
			data: [
				{
					nome: "Salada cesar com frango",
					descricao: "",
					data: "11.08.2023",
					hora: "12:30",
					estaNaDieta: true,
				},
				{
					nome: "Vitamina de banana",
					descricao: "",
					data: "11.08.2023",
					hora: "09:30",
					estaNaDieta: true,
				},
			],
		},
	]);

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

	return (
		<Conteiner>
			<Cabecalho />
			<Heroi titulo="90,86%" tipo="primario" onPress={lidarAbrirHeroi}>
				das refeições dentro da dieta
			</Heroi>

			<SecaoConteiner>
				<SecaoNome>Refeições</SecaoNome>
				<Botao tipo="primario" icone="adicionar" onPress={lidarAbrirCriar}>
					Nova refeição
				</Botao>

				<SectionList
					sections={refeicoes}
					keyExtractor={(item, index) => item.hora + index}
					renderItem={({ item }) => <RefeicaoCartao onPress={lidarAbrirRefeicao} refeicao={item} />}
					renderSectionHeader={({ section: { date } }) => <SecaoTitulo>{date}</SecaoTitulo>}
				/>
			</SecaoConteiner>
		</Conteiner>
	);
}
