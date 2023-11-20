import { TouchableOpacityProps } from "react-native";
import {
	BotaoIconeEstiloProps,
	BotaoTipoEstiloProps,
	Conteiner,
	IconeAdicionar,
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
const BotaoIcones: { [key in BotaoIconeEstiloProps]: ReactNode } = {
	adicionar: <IconeAdicionar />,
	deletar: <IconeDeletar />,
	editar: <IconeEditar />,
};

export default function Botao({ icone, tipo = "primario", children, ...rest }: BotaoProps) {
	return (
		<Conteiner tipo={tipo} {...rest}>
			{icone && BotaoIcones[icone]}
			<Titulo tipo={tipo}>{children}</Titulo>
		</Conteiner>
	);
}
