import AsyncStorage from "@react-native-async-storage/async-storage";
import { obterRefeicoes } from "./obterRefeicoes";
import { RefeicaoDTO } from "./refeicaoDTO";
import { Refeicao_Colecao } from "@arm/armConfig";

export default async function removerRefeicao(refeicao: RefeicaoDTO) {
	try {
		let refeicoes = await obterRefeicoes();
		refeicoes = refeicoes.filter(
			(ref) =>
				ref.nome !== refeicao.nome && ref.data !== refeicao.data && ref.hora !== refeicao.hora
		);
		await AsyncStorage.setItem(Refeicao_Colecao, JSON.stringify(refeicoes));
	} catch (erro) {
		throw erro;
	}
}
