import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Conteiner = styled(SafeAreaView)`
	background-color: ${({ theme }) => theme.CORES.BASE.GRAY_100};
  border-radius: 20px;
`;

// export const Cabecalho = styled(SafeAreaView)
