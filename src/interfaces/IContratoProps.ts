export default interface IContratoProps {
  id: number;
  locador: string;
  nome_locatario: string;
  dia_imovel_inicial: number;
  mes_imovel_inicial: number;
  ano_imovel_inicial: number;
  dia_imovel_final: number;
  mes_imovel_final: number;
  ano_imovel_final: number;
  onEditar: (id: number) => void;
  onExcluir: (id: number) => void;
}