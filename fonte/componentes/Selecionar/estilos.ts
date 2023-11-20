import { css } from "styled-components/native";
import styled from "styled-components/native";
import { Circle, Dot } from "phosphor-react-native";

export type SelecionarTipoEstiloProps = "primario" | "secundario";
export type SelecionarAtivoEstiloProps = boolean;

type SelecionarEstiloProps = {
	tipo: SelecionarTipoEstiloProps;
	ativo: SelecionarAtivoEstiloProps;
};

export const Conteiner = styled.TouchableOpacity<SelecionarEstiloProps>`
	padding: 16px 24px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_200};
	${({ theme, tipo, ativo }) =>
		ativo &&
		css`
			background-color: ${tipo == "primario"
				? theme.CORES.PRODUTO.GREEN_LIGHT
				: theme.CORES.PRODUTO.RED_LIGHT};
			border: 1px solid
				${tipo == "primario" ? theme.CORES.PRODUTO.GREEN_DARK : theme.CORES.PRODUTO.RED_DARK};
		`}
`;

export const Titulo = styled.Text`
	${({ theme }) => css`
		color: ${theme.CORES.BASE.GRAY_700};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
	`}
`;

export const Icone = styled(Circle).attrs(() => ({
	size: 12,
	weight: "fill"
}))`
	margin-right: 8px;
`;
