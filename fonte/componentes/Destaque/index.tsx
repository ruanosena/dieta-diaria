import { ReactNode } from "react";
import { Conteiner, Texto, Titulo, DestaqueTipoEstiloProps } from "./estilos";
import { ViewProps } from "react-native";

type DestaqueProps = ViewProps & {
	titulo: string;
	children: ReactNode;
	tipo?: DestaqueTipoEstiloProps;
};

export default function Destaque({ titulo, children, tipo, ...rest }: DestaqueProps) {
	return (
		<Conteiner tipo={tipo} {...rest}>
			<Titulo>{titulo}</Titulo>
			<Texto>{children}</Texto>
		</Conteiner>
	);
}
