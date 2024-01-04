import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RefeicaoDTO } from "@arm/refeicao/refeicaoDTO";
import { Conteiner, SecaoConteiner, SecaoLinha, SecaoNome } from "./estilos";
import Destaque from "@comp/Destaque";
import Heroi from "@comp/Heroi";
import { obterRefeicoes } from "@arm/refeicao/obterRefeicoes";

export default function Estatisticas() {
	const [refeicoes, defRefeicoes] = useState<RefeicaoDTO[]>([]);
	const navegador = useNavigation();

	const dentroDaDieta = refeicoes.filter((r) => r.estaNaDieta);
	const foraDaDieta = refeicoes.filter((r) => !r.estaNaDieta);
	const porcentagem = (dentroDaDieta.length / refeicoes.length) * 100;
	const melhorSequencia = refeicoes.reduce((total, ref, indice, lista) => {
		if (ref.estaNaDieta && !lista[indice - 1]?.estaNaDieta) {
			// nova sequência em dieta
			const soma = somarSequenciaNaDieta(lista.slice(indice));
			return total > soma ? total : soma;
		}
		return total;
	}, 0);

	function somarSequenciaNaDieta(refeicoes: RefeicaoDTO[]) {
		let total = 0;
		for (let i = 0; i < refeicoes.length; i++) {
			if (!refeicoes[i].estaNaDieta) {
				if (total == 0) continue;
				return total;
			} else total++;
		}
		return total;
	}

	function lidarVoltar() {
		navegador.navigate("inicio");
	}

	async function buscarRefeicoes() {
		defRefeicoes(await obterRefeicoes());
	}

	useFocusEffect(
		useCallback(() => {
			buscarRefeicoes();
		}, [])
	);

	return (
		<Conteiner>
			<Heroi
				titulo={`${porcentagem}%`}
				descricao="das refeições dentro da dieta"
				topo
				onPress={lidarVoltar}
				tipo={porcentagem >= 50 ? "primario" : "secundario"}
			/>

			<SecaoConteiner>
				<SecaoNome>Estatísticas gerais</SecaoNome>

				<Destaque titulo={melhorSequencia}>melhor sequência de pratos dentro da dieta</Destaque>
				<Destaque titulo={refeicoes.length}>
					{refeicoes.length > 1 ? "refeições registradas" : "refeição registrada"}
				</Destaque>
				<SecaoLinha>
					<Destaque titulo={dentroDaDieta.length} tipo="primario">
						{dentroDaDieta.length > 1 ? "refeições" : "refeição"} dentro da dieta
					</Destaque>
					<Destaque titulo={foraDaDieta.length} tipo="secundario">
						{foraDaDieta.length > 1 ? "refeições" : "refeição"} fora da dieta
					</Destaque>
				</SecaoLinha>
			</SecaoConteiner>
		</Conteiner>
	);
}
