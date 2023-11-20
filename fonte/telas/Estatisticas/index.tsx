import { Conteiner } from "./estilos";
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
			<Heroi titulo="90,86%" topo onPress={lidarVoltar} tipo="primario" >
				das refeições dentro da dieta
			</Heroi>
		</Conteiner>
	);
}
