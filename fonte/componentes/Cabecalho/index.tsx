import { ReactNode } from "react";
import { Conteiner, Icone, Titulo } from "./estilos";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
	children?: ReactNode;
};

export default function Cabecalho({ children }: Props) {
	const navegador = useNavigation();

	function lidarVoltar() {
		navegador.goBack();
	}

	return (
		<Conteiner>
			<TouchableOpacity onPress={lidarVoltar}>
				<Icone />
			</TouchableOpacity>
			<Titulo>{children}</Titulo>
		</Conteiner>
	);
}
