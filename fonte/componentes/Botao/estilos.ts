import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type BotaoTipoEstiloProps = "primario" | "secundario";
export type BotaoIconeEstiloProps = "editar" | "deletar" | "adicionar";

type BotaoEstiloProps = {
	tipo: BotaoTipoEstiloProps;
};

export const Conteiner = styled.TouchableOpacity<BotaoEstiloProps>`
	padding: 16px 24px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	${({ theme, tipo }) => css`
		background-color: ${tipo == "primario" ? theme.CORES.BASE.GRAY_600 : theme.CORES.BASE.GRAY_100};
		border-width: 1px;
		border-color: ${tipo == "secundario" && theme.CORES.BASE.GRAY_700};
	`}
`;

export const Titulo = styled.Text<BotaoEstiloProps>`
	${({ theme, tipo }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${tipo == "primario" ? theme.CORES.BASE.WHITE : theme.CORES.BASE.GRAY_700};
	`}
`;

export const IconeEditar = styled(PencilSimpleLine).attrs(({ theme }) => ({
	color: theme.CORES.BASE.WHITE,
	size: 18,
}))`
	margin-right: 12px;
`;

export const IconeDeletar = styled(Trash).attrs(({ theme }) => ({
	color: theme.CORES.BASE.GRAY_700,
	size: 18,
}))`
	margin-right: 12px;
`;

export const IconeAdicionar = styled(Plus).attrs(({ theme }) => ({
	color: theme.CORES.BASE.WHITE,
	size: 18,
}))`
	margin-right: 12px;
`;
