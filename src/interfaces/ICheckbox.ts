export default interface ICheckbox {
  label: string;
  tipoGarantia: string;
  setTipoGarantia: (tipo: string) => void;
}