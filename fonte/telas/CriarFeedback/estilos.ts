import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type FeedbackDietaEstiloProps = boolean;

type FeedbackEstiloProps = { dieta: FeedbackDietaEstiloProps };

export const Conteiner = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_100};
	align-items: center;
	justify-content: center;
`;

export const Feedback = styled.View`
	margin-bottom: 40px;
`;

export const FeedbackTitulo = styled.Text<FeedbackEstiloProps>`
	${({ theme, dieta }) => css`
		color: ${dieta ? theme.CORES.PRODUTO.GREEN_DARK : theme.CORES.PRODUTO.RED_DARK};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XL}px;
	`}
  text-align: center;
`;

export const FeedbackTexto = styled.Text`
	${({ theme }) => css`
		color: ${theme.CORES.BASE.GRAY_700};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
	`}
  text-align: center;
`;
