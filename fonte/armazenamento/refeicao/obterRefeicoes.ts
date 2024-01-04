import { Refeicao_Colecao } from "@arm/armConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RefeicaoDTO, SecaoRefeicaoDTO } from "./refeicaoDTO";

export default async function obterRefeicoesPorSecao() {
	try {
		const armazenamento = await AsyncStorage.getItem(Refeicao_Colecao);
		const refeicoes: RefeicaoDTO[] = armazenamento ? JSON.parse(armazenamento) : [];
		return refeicoes.reduce<SecaoRefeicaoDTO[]>((novaLista, ref) => {
			const title = ref.data.replaceAll("/", ".");
			const indice = novaLista.findIndex((s) => s.title == title);
			if (indice == -1) {
				novaLista.push({ title, data: [ref] });
			} else {
				novaLista[indice].data.push(ref);
			}
			return novaLista;
		}, []);
	} catch (erro) {
		throw erro;
	}
}

export async function obterRefeicoes(data?: string) {
	try {
		const armazenamento = await AsyncStorage.getItem(Refeicao_Colecao);
		const refeicoes: RefeicaoDTO[] = armazenamento ? JSON.parse(armazenamento) : [];
		return data ? refeicoes.filter((ref) => ref.data == data) : refeicoes;
	} catch (erro) {
		throw erro;
	}
}
