import { useTheme } from "styled-components/native";
import { Conteiner, Distintivo, Marcacao, Nome } from "./estilos";

type RefeicaoCartaoProps = {
	estaAtivo?: boolean;
};

export default function RefeicaoCartao({ estaAtivo = true }: RefeicaoCartaoProps) {
	const { CORES } = useTheme();

	return (
		<Conteiner ativo={estaAtivo}>
			<Marcacao>20:00</Marcacao>
			<Nome>X-tudo</Nome>
			<Distintivo color={estaAtivo ? CORES.PRODUTO.GREEN_MID : CORES.PRODUTO.RED_MID} />
		</Conteiner>
	);
}
