import { TextInput } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Conteiner = styled.View`
	width: 100%;
	height: 70px;
`;

export const Rotulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.CORES.BASE.GRAY_600};
	`}
`;

export const EntradaTexto = styled(TextInput)`
	flex: 1;
	min-height: 56px;
	max-height: 56px;
	${({ theme }) => css`
		background-color: ${theme.CORES.BASE.GRAY_100};
		color: ${theme.CORES.BASE.GRAY_700};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.CORES.BASE.GRAY_500}
	`}
	border-radius: 6px;
	padding: 14px;
`;
