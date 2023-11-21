export type SecaoRefeicaoDTO = {
  date: string;
  data: RefeicaoDTO[];
}
export type RefeicaoDTO = {
  nome: string;
  descricao?: string;
  data: string;
  hora: string;
  estaNaDieta: boolean;
}