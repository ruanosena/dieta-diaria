import AsyncStorage from "@react-native-async-storage/async-storage";
import { obterRefeicoes } from "./obterRefeicoes";
import { RefeicaoDTO } from "./refeicaoDTO";
import { Refeicao_Colecao } from "@arm/armConfig";

export default async function criarRefeicao(refeicao: RefeicaoDTO) {
	try {
		const refeicoes = await obterRefeicoes();
		refeicoes.push(refeicao);
		await AsyncStorage.setItem(Refeicao_Colecao, JSON.stringify(refeicoes));
	} catch (erro) {
		throw erro;
	}
}
