import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Conteiner = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_100};
`;

export const SecaoConteiner = styled.View`
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_100};
	border-radius: 20px;
	padding: 24px;
`;

export const SecaoNome = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
	text-align: center;
	margin: 8px 0 16px;
`;

export const SecaoLinha = styled.View`
	flex-direction: row;
	gap: 12px;
	max-width: 100%;
`;
