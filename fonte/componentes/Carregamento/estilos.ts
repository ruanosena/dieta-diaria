import styled from "styled-components/native";

export const Conteiner = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
  background-color: ${({theme}) => theme.CORES.BASE.GRAY_100};
`;

export const Indicador = styled.ActivityIndicator.attrs(({theme}) => ({
	color: theme.CORES.PRODUTO.GREEN_DARK,
}))``;
