import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Conteiner = styled(SafeAreaView)`
	padding: 24px;
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_300};
`;

export const Titulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
	flex: 1;
	text-align: center;
`;

export const Icone = styled(ArrowLeft).attrs(({ theme }) => ({
	size: 24,
	color: theme.CORES.BASE.GRAY_600,
}))``;
