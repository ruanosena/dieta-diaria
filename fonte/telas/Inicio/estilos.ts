import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Conteiner = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_100};
	align-items: "center";
	justify-content: "center";
	padding: 24px;
`;

export const SecaoConteiner = styled.View`
	margin-top: 40px;
`;

export const SecaoNome = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
	margin-bottom: 8px;
`;
export const SecaoTitulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
	margin-bottom: 8px;
	margin-top: 16px;
`;
