import { useNavigation, useRoute } from "@react-navigation/native";
import { Conteiner, Feedback, FeedbackTexto, FeedbackTitulo } from "./estilos";

import imagemNaDieta from "../../../assets/continuou-na-dieta.png";
import imagemforaDaDieta from "../../../assets/saiu-da-dieta.png";
import { Image } from "react-native";
import Botao from "@comp/Botao";

type RotaParams = {
	estaNaDieta: boolean;
};

export default function CriarFeedback() {
	const rota = useRoute();
	const { estaNaDieta } = rota.params as RotaParams;
	const navegador = useNavigation();

	function lidarVoltar() {
		navegador.navigate("inicio");
	}

	return (
		<Conteiner>
			<Feedback>
				<FeedbackTitulo dieta={estaNaDieta}>{estaNaDieta ? "Continue assim!" : "Que pena!"}</FeedbackTitulo>
				<FeedbackTexto>
					{estaNaDieta
						? "Você continua dentro da dieta. Muito bem!"
						: "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
				</FeedbackTexto>
			</Feedback>
			<Image
				source={estaNaDieta ? imagemNaDieta : imagemforaDaDieta}
				style={{ height: 288, width: 224, marginBottom: 32 }}
			/>
			<Botao onPress={lidarVoltar}>Ir para a página inicial</Botao>
		</Conteiner>
	);
}
