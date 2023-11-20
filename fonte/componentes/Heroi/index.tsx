import { ReactNode } from "react";
import {
	IconeDireita,
	IconeVoltar,
	Conteiner,
	Texto,
	Titulo,
	HeroiTipoEstiloProps,
	BotaoIcone,
} from "./estilos";
import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

type DestaqueProps = TouchableOpacityProps & {
	titulo: string;
	children: ReactNode;
	topo?: boolean;
	tipo?: HeroiTipoEstiloProps;
};

export default function Heroi({ titulo, children, tipo = "primario", topo, ...rest }: DestaqueProps) {
	const { CORES } = useTheme();

	return (
		<Conteiner tipo={tipo}>
			<BotaoIcone topo={topo} {...rest}>
				{topo ? (
					<IconeVoltar color={tipo == "primario" ? CORES.PRODUTO.GREEN_DARK : CORES.PRODUTO.RED_DARK} />
				) : (
					<IconeDireita color={tipo == "primario" ? CORES.PRODUTO.GREEN_DARK : CORES.PRODUTO.RED_DARK} />
				)}
			</BotaoIcone>
			<Titulo>{titulo}</Titulo>
			<Texto>{children}</Texto>
		</Conteiner>
	);
}
