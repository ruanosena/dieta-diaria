import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Conteiner = styled.View`
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	margin-bottom: 32px;
`;

export const Logotipo = styled.View`
	flex-direction: row;
	width: 78px;
	height: 41px;
`;

export const Marca = styled.Text`
	margin-left: 4px;
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
		color: ${theme.CORES.BASE.GRAY_700};
	`}
`;

export const Perfil = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	border: 2px solid ${({ theme }) => theme.CORES.BASE.GRAY_200};
	border-radius: 40px;
	overflow: hidden;
`;

export const Imagem = styled.Image`
	max-width: 100%;
	max-height: 100%;
`;
