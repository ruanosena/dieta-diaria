import { ReactNode } from "react";
import { Conteiner, Icone, Titulo } from "./estilos";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
	children?: ReactNode;
	tipo?: "primario" | "secundario";
};

export default function Cabecalho({ tipo, children }: Props) {
	const navegador = useNavigation();

	function lidarVoltar() {
		navegador.goBack();
	}

	return (
		<Conteiner tipo={tipo}>
			<TouchableOpacity onPress={lidarVoltar}>
				<Icone />
			</TouchableOpacity>
			<Titulo>{children}</Titulo>
		</Conteiner>
	);
}
