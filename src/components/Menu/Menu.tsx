import { Link } from 'react-router-dom';
import ContratoCard from '../contrato-card/Contato-card'

const mockContratos = [
  {
    id: 1,
    titulo: 'Contrato de Aluguel - João Silva',
    data: '10/05/2024',
    status: 'Ativo',
  },
  {
    id: 2,
    titulo: 'Contrato de Aluguel - Maria Oliveira',
    data: '22/03/2024',
    status: 'Encerrado',
  },
  {
    id: 3,
    titulo: 'Contrato de Aluguel - Empresa XYZ',
    data: '02/06/2023',
    status: 'Ativo',
  },
];

export default function Menu() {
  const handleEditar = (id: number) => {
    alert(`Editar contrato ID: ${id}`);
  };

  const handleExcluir = (id: number) => {
    alert(`Excluir contrato ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Gerenciador de Contratos</h1>
        <nav className="flex gap-4">
          <Link to="/editor">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-sm transition-all cursor-pointer">
              Novo contrato
            </button>
          </Link>
        </nav>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contratos Recentes</h2>

        <div className="flex flex-col gap-4">
          {mockContratos.map((contrato) => (
            <ContratoCard
              key={contrato.id}
              {...contrato}
              onEditar={handleEditar}
              onExcluir={handleExcluir}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
