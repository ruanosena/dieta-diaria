import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Estatisticas from "@tela/Estatisticas";
import Inicio from "@tela/Inicio";

const { Navigator: Navegador, Screen: Tela } = createNativeStackNavigator();

export default function AppRotas() {
	return (
		<Navegador initialRouteName="inicio" screenOptions={{ headerShown: false }}>
			<Tela name="inicio" component={Inicio} />
			<Tela name="estatisticas" component={Estatisticas} />
		</Navegador>
	);
}
