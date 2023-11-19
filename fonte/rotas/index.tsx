import { NavigationContainer as NavegacaoConteiner } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import AppRotas from "./app.rotas";

export default function Rotas() {
	const { CORES } = useTheme();

	return (
		<View style={{ flex: 1, backgroundColor: CORES.BASE.GRAY_100 }}>
			<NavegacaoConteiner>
				<AppRotas />
			</NavegacaoConteiner>
		</View>
	);
}
