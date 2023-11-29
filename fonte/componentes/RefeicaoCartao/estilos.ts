import { Circle } from "phosphor-react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

type RefeicaoCartaoEstiloProps = {
	ativo: boolean;
};

export const Conteiner = styled.TouchableOpacity<RefeicaoCartaoEstiloProps>`
	width: 100%;
	flex-direction: row;
	align-items: center;
	padding: 14px 16px 14px 12px;
	border: 1px solid
		${({theme}) => theme.CORES.BASE.GRAY_300};
	margin: 4px 0;
`;

export const Marcacao = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.XS}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.CORES.BASE.GRAY_700};
    border-right-width: 1px;
		border-right-color: ${theme.CORES.BASE.GRAY_400};
	`}
	padding-right: 12px;
  margin-right: 12px;
`;

export const Nome = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.CORES.BASE.GRAY_600};
	`}
	flex: 1;
`;

export const Distintivo = styled(Circle).attrs(() => ({
	size: 14,
	weight: "fill",
}))``;
