import { TextInputProps } from "react-native";
import { Conteiner, EntradaTexto, Rotulo } from "./estilos";

type EntradaProps = TextInputProps & {
	rotulo?: string;
};

export default function Entrada({ rotulo, ...rest }: EntradaProps) {
	return (
		<Conteiner>
			{ rotulo && <Rotulo>{rotulo}</Rotulo>}
			<EntradaTexto {...rest} />
		</Conteiner>
	);
}
