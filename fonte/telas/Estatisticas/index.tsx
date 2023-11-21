import { Conteiner, SecaoConteiner, SecaoLinha, SecaoNome } from "./estilos";
import Destaque from "@comp/Destaque";
import Heroi from "@comp/Heroi";
import { useNavigation } from "@react-navigation/native";

export default function Estatisticas() {
	const navegador = useNavigation();

	function lidarVoltar() {
		navegador.navigate("inicio");
	}

	return (
		<Conteiner>
			<Heroi titulo="90,86%" topo onPress={lidarVoltar} tipo="primario">
				das refeições dentro da dieta
			</Heroi>

			<SecaoConteiner>
				<SecaoNome>Estatísticas gerais</SecaoNome>

				<Destaque titulo="22">melhor sequência de pratos dentro da dieta</Destaque>
				<Destaque titulo="109">refeições registradas</Destaque>
				<SecaoLinha>
					<Destaque titulo="99" tipo="primario">
						reifeições dentro da dieta
					</Destaque>
					<Destaque titulo="10" tipo="secundario">
						refeições fora da dieta
					</Destaque>
				</SecaoLinha>
			</SecaoConteiner>
		</Conteiner>
	);
}
