import tema from "../tema";

declare module "styled-components/native" {
	type TemaTipo = typeof tema;

	export interface DefaultTheme extends TemaTipo {}
}
