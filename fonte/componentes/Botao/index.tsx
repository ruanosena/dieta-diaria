import { ActivityIndicator, TouchableOpacityProps } from "react-native";
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
	estaCarregando?: boolean;
};
const BotaoIcones: { [key in BotaoIconeEstiloProps]: ReactNode } = {
	adicionar: <IconeAdicionar />,
	deletar: <IconeDeletar />,
	editar: <IconeEditar />,
};

export default function Botao({
	icone,
	estaCarregando = false,
	tipo = "primario",
	children,
	...rest
}: BotaoProps) {
	return (
		<Conteiner tipo={tipo} {...rest} disabled={estaCarregando}>
			{icone && BotaoIcones[icone]}
			<Titulo tipo={tipo}>{estaCarregando ? <ActivityIndicator /> : children}</Titulo>
		</Conteiner>
	);
}
