import { Conteiner, SecaoConteiner, SecaoTitulo } from "./estilos";
import Cabecalho from "@comp/Cabecalho";
import Heroi from "@comp/Heroi";
import Botao from "@comp/Botao";
import { useNavigation } from "@react-navigation/native";
import RefeicaoCartao from "@comp/RefeicaoCartao";

export default function Inicio() {
	const navegador = useNavigation();

	function lidarAbrirHeroi() {
		navegador.navigate("estatisticas");
	}

	return (
		<Conteiner>
			<Cabecalho />
			<Heroi titulo="90,86%" tipo="primario" onPress={lidarAbrirHeroi}>
				das refeições dentro da dieta
			</Heroi>

			<SecaoConteiner>
				<SecaoTitulo>Refeições</SecaoTitulo>
				<Botao tipo="primario" icone="adicionar">
					Nova refeição
				</Botao>

				<RefeicaoCartao />
			</SecaoConteiner>
		</Conteiner>
	);
}
