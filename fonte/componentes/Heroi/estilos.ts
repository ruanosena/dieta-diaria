import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type HeroiEstiloProps = {
	positivo?: boolean;
	topo?: boolean;
};

export const Conteiner = styled.View<HeroiEstiloProps>`
	align-items: center;
	background-color: ${({ theme, positivo }) =>
		positivo ? theme.CORES.PRODUTO.GREEN_LIGHT : theme.CORES.PRODUTO.RED_LIGHT};
	padding: 8px 8px 16px;
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

export const IconeDireita = styled(ArrowUpRight).attrs(({ theme }) => ({
	color: theme.CORES.PRODUTO.GREEN_DARK,
	size: 24,
}))`
	align-self: flex-end;
`;

export const IconeVoltar = styled(ArrowLeft).attrs(({ theme }) => ({
	color: theme.CORES.PRODUTO.GREEN_DARK,
	size: 24,
}))`
	align-self: flex-start;
`;
