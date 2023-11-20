import { TextInputProps } from "react-native";
import { Conteiner, EntradaTexto, Rotulo } from "./estilos";

type EntradaProps = TextInputProps & {
	titulo?: string;
};

export default function Entrada({ titulo, ...rest }: EntradaProps) {
	return (
		<Conteiner>
			{ titulo && <Rotulo>{titulo}</Rotulo>}
			<EntradaTexto {...rest} />
		</Conteiner>
	);
}
