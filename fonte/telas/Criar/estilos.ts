import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Conteiner = styled(SafeAreaView)`
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_300};
	flex: 1;
`;

export const Topo = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: 24px;
`;

export const TopoTexto = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
	text-align: center;
	flex: 1;
`;

export const TopoBotao = styled.TouchableOpacity`
	width: 32px;
	height: 32px;
	justify-content: center;
	align-items: center;
`;

export const TopoIcone = styled(ArrowLeft).attrs(({ theme }) => ({
	size: 24,
	color: theme.CORES.BASE.GRAY_600,
}))``;

export const Formulario = styled.View`
	flex: 1;
	padding: 24px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.CORES.BASE.WHITE};
	row-gap: 24px;
`;

export const FormularioRotulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.CORES.BASE.GRAY_600};
	`}
	width: 100%;
`;
export const FormularioLinha = styled.View`
	flex-flow: row wrap;
`;
