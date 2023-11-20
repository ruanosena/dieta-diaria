import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type HeroiTipoEstiloProps = "primario" | "secundario";

type HeroiEstiloProps = {
	tipo?: HeroiTipoEstiloProps;
	topo?: boolean;
};

export const Conteiner = styled.View<HeroiEstiloProps>`
	align-items: center;
	${({ theme, tipo }) =>
		css`
			background-color: ${tipo == "primario"
				? theme.CORES.PRODUTO.GREEN_LIGHT
				: theme.CORES.PRODUTO.RED_LIGHT};
		`}
	padding: 8px 8px 16px;
	border-radius: 8px;
`;

export const Titulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XXL}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
`;

export const Texto = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
`;

export const BotaoIcone = styled.TouchableOpacity<HeroiEstiloProps>`
	align-self: ${({ topo }) => (topo ? "flex-start" : "flex-end")};
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
`;

export const IconeDireita = styled(ArrowUpRight).attrs(() => ({
	size: 32,
}))``;

export const IconeVoltar = styled(ArrowLeft).attrs(() => ({
	size: 32,
}))``;
