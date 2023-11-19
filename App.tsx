import { StatusBar } from "react-native";
import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components/native";
import tema from "./fonte/tema";
import Carregamento from "@comp/Carregamento";
import Rotas from "./fonte/rotas";

export default function App() {
	const [fonteCarregada] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

	return (
		<ThemeProvider theme={tema}>
			<StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
			{fonteCarregada ? <Rotas /> : <Carregamento />}
		</ThemeProvider>
	);
}
