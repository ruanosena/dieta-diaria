import Cabecalho from "@comp/Cabecalho";
import {
	BotoesGrupo,
	Conteiner,
	ConteudoConteiner,
	DataHora,
	Descricao,
	Subtitulo,
	Titulo,
} from "./estilos";
import Selecionavel from "@comp/Selecionavel";
import Botao from "@comp/Botao";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { RefeicaoDTO } from "@arm/refeicao/refeicaoDTO";
import { obterRefeicoes } from "@arm/refeicao/obterRefeicoes";
import removerRefeicao from "@arm/refeicao/removerRefeicao";
import { Alert } from "react-native";

type RotaParamsProps = {
	indice: number;
	data: string;
};

export default function Refeicao() {
	const [refeicao, defRefeicao] = useState<RefeicaoDTO>();
	const [excluindoRefeicao, defExcluindoRefeicao] = useState(false);
	const { goBack: voltar } = useNavigation();
	const rota = useRoute();
	const { indice, data } = rota.params as RotaParamsProps;

	async function obterRefeicao() {
		const refeicoesPorData = await obterRefeicoes(data);
		defRefeicao(refeicoesPorData[indice]);
	}

	async function deletarRefeicao() {
		try {
			if (refeicao) {
				defExcluindoRefeicao(true);
				Alert.alert("Remover", `Deseja realmente excluir o registro da refeição?`, [
					{ text: "Não", style: "cancel" },
					{
						text: "Sim",
						onPress: async () => {
							await removerRefeicao(refeicao);
							voltar();
						},
					},
				]);
			}
		} catch (erro) {
			console.log(erro);
			Alert.alert("Erro", "Não foi possível excluir a refeição.");
			defExcluindoRefeicao(false);
		}
	}

	useEffect(() => {
		obterRefeicao();
	}, [indice, data]);

	return (
		<Conteiner>
			<Cabecalho tipo={refeicao?.estaNaDieta ? "primario" : "secundario"}>Refeição</Cabecalho>
			<ConteudoConteiner>
				<Titulo>{refeicao?.nome}</Titulo>
				<Descricao>{refeicao?.descricao}</Descricao>
				<Subtitulo>Data e hora</Subtitulo>
				<DataHora>
					{refeicao?.data} às {refeicao?.hora}
				</DataHora>
				<Selecionavel
					tipo={refeicao?.estaNaDieta ? "primario" : "secundario"}
					style={{ borderRadius: 50 }}
				>
					{refeicao?.estaNaDieta ? "dentro" : "fora"} da dieta
				</Selecionavel>
			</ConteudoConteiner>
			<BotoesGrupo>
				<Botao icone="editar">Editar refeição</Botao>
				<Botao
					icone="deletar"
					tipo="secundario"
					onPress={deletarRefeicao}
					estaCarregando={excluindoRefeicao}
				>
					Excluir refeição
				</Botao>
			</BotoesGrupo>
		</Conteiner>
	);
}
