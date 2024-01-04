import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Conteiner = styled(View)`
	flex: 1;
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_100};
`;

export const ConteudoConteiner = styled.View`
	border-radius: 20px;
	padding: 24px;
	flex: 1;
	align-items: flex-start;
`;
export const BotoesGrupo = styled.View`
	padding: 24px;
	gap: 9px;
`;

export const Titulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
	margin: 8px 0;
`;
export const Descricao = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.CORES.BASE.GRAY_600};
	`}
	margin-bottom: 24px;
`;

export const Subtitulo = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
`;

export const DataHora = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.CORES.BASE.GRAY_600};
	`}
	margin: 8px 0;
`;
