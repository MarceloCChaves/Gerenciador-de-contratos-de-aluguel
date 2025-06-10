import { Pencil, Trash2 } from 'lucide-react';
import type IContratoProps from '../../interfaces/IContratoProps';

export default function ContratoCard({
  id,
  locador,
  nome_locatario,
  dia_imovel_inicial,
  mes_imovel_inicial,
  ano_imovel_inicial,
  dia_imovel_final,
  mes_imovel_final,
  ano_imovel_final,
  onExcluir,
  onEditar,
}: IContratoProps) {
  const dataInicial = `${String(dia_imovel_inicial).padStart(2, '0')}/${String(mes_imovel_inicial).padStart(2, '0')}/${ano_imovel_inicial}`;
  const dataFinal = `${String(dia_imovel_final).padStart(2, '0')}/${String(mes_imovel_final).padStart(2, '0')}/${ano_imovel_final}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold text-gray-800">
          Contrato de locação - {locador} x {nome_locatario}
        </h3>
        <p className="text-sm text-gray-500">
          Data: {dataInicial} - {dataFinal}
        </p>
      </div>
      <div className="flex space-x-3">
        <button
          className="text-blue-600 hover:text-blue-800 transition"
          title="Editar"
          onClick={() => onEditar(id)}
        >
          <Pencil size={20} />
        </button>
        <button
          className="text-red-600 hover:text-red-800 transition"
          title="Excluir"
          onClick={() => onExcluir(id)}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
