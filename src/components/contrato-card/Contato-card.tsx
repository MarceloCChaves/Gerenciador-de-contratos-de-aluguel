import { Pencil, Trash2 } from 'lucide-react';

interface ContratoProps {
  id: number;
  titulo: string;
  data: string;
  status: string;
  onEditar: (id: number) => void;
  onExcluir: (id: number) => void;
}

export default function ContratoCard({ id, titulo, data, status, onEditar, onExcluir }: ContratoProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{titulo}</h3>
        <p className="text-sm text-gray-500">Data: {data}</p>
        <p className={`mt-1 text-sm font-medium ${status === 'Ativo' ? 'text-green-600' : 'text-red-500'}`}>
          Status: {status}
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
