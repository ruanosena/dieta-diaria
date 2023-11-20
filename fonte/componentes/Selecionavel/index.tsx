import { TouchableOpacityProps } from "react-native";
import {
	Conteiner,
	Icone,
	SelecionarAtivoEstiloProps,
	SelecionarTipoEstiloProps,
	Titulo,
} from "./estilos";
import { ReactNode } from "react";
import { useTheme } from "styled-components/native";

type SelecionarProps = TouchableOpacityProps & {
	tipo?: SelecionarTipoEstiloProps;
	estaAtivo?: SelecionarAtivoEstiloProps;
	children: ReactNode;
};

export default function Selecionavel({
	tipo = "primario",
	estaAtivo = false,
	children,
	...rest
}: SelecionarProps) {
	const { CORES } = useTheme();

	return (
		<Conteiner tipo={tipo} ativo={estaAtivo} {...rest}>
			<Icone color={tipo == "primario" ? CORES.PRODUTO.GREEN_DARK : CORES.PRODUTO.RED_DARK} />
			<Titulo>{children}</Titulo>
		</Conteiner>
	);
}
