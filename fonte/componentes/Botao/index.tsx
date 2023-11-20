import { TouchableOpacityProps } from "react-native";
import {
	BotaoIconeEstiloProps,
	BotaoTipoEstiloProps,
	Conteiner,
	IconeDeletar,
	IconeEditar,
	Titulo,
} from "./estilos";
import { ReactNode } from "react";

type BotaoProps = TouchableOpacityProps & {
	icone?: BotaoIconeEstiloProps;
	tipo?: BotaoTipoEstiloProps;
	children: ReactNode;
};

export default function Botao({ icone, tipo = "primario", children, ...rest }: BotaoProps) {
	return (
		<Conteiner tipo={tipo} {...rest}>
			{icone && icone == "editar" ? <IconeEditar /> : icone && <IconeDeletar />}
			<Titulo tipo={tipo}>{children}</Titulo>
		</Conteiner>
	);
}
