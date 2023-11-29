import { useTheme } from "styled-components/native";
import { Conteiner, Distintivo, Marcacao, Nome } from "./estilos";
import { RefeicaoDTO } from "@arm/refeicao/RefeicaoDTO";
import { TouchableOpacityProps } from "react-native";

type RefeicaoCartaoProps = TouchableOpacityProps & {
	refeicao: RefeicaoDTO;
};

export default function RefeicaoCartao({ refeicao, ...rest }: RefeicaoCartaoProps) {
	const { CORES } = useTheme();

	return (
		<Conteiner ativo={refeicao.estaNaDieta} {...rest}>
			<Marcacao>{refeicao.hora}</Marcacao>
			<Nome>{refeicao.nome}</Nome>
			<Distintivo color={refeicao.estaNaDieta ? CORES.PRODUTO.GREEN_MID : CORES.PRODUTO.RED_MID} />
		</Conteiner>
	);
}
