import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type DestaqueTipoEstiloProps = "primario" | "secundario";

type DestaqueEstiloProps = {
	tipo?: DestaqueTipoEstiloProps;
};

export const Conteiner = styled.View<DestaqueEstiloProps>`
	align-items: center;
	${({ theme, tipo }) =>
		tipo
			? css`
					background-color: ${tipo == "primario"
						? theme.CORES.PRODUTO.GREEN_LIGHT
						: theme.CORES.PRODUTO.RED_LIGHT};
					flex: 1;
			  `
			: css`
					background-color: ${theme.CORES.BASE.GRAY_200};
			  `}
	padding: 16px 16px;
	border-radius: 8px;
	margin: 6px 0;
`;

export const Titulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XL}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
`;

export const Texto = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
	text-align: center;
`;
