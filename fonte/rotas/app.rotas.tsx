import { useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Criar from "@tela/Criar";
import CriarFeedback from "@tela/CriarFeedback";
import Estatisticas from "@tela/Estatisticas";
import Inicio from "@tela/Inicio";
import Refeicao from "@tela/Refeicao";

const { Navigator: Navegador, Screen: Tela } = createNativeStackNavigator();

export default function AppRotas() {
	return (
		<Navegador initialRouteName="inicio" screenOptions={{ headerShown: false }}>
			<Tela name="inicio" component={Inicio} />
			<Tela name="estatisticas" component={Estatisticas} />
			<Tela name="criar" component={Criar} />
			<Tela name="criarFeedback" component={CriarFeedback} />
			<Tela name="refeicao" component={Refeicao} />
		</Navegador>
	);
}
