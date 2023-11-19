import {
	IconeDireita,
	IconeVoltar,
	Conteiner,
	HeroiEstiloProps,
	Texto,
	Titulo,
} from "./estilos";

export default function Heroi({ positivo = true, topo = false }: HeroiEstiloProps) {
	return (
		<Conteiner positivo={positivo}>
			{topo ? <IconeVoltar /> : <IconeDireita />}
			<Titulo>90,86%</Titulo>
			<Texto>das refeições dentro da dieta</Texto>
		</Conteiner>
	);
}
