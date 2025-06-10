import { Link } from 'react-router-dom';
import ContratoCard from '../../components/contrato-card/Contato-card'
import { useEffect, useState } from 'react';
import API from '../../api/api';
import type IContratoProps from '../../interfaces/IContratoProps';


export default function Menu() {
  const [contratos, setContratos] = useState<IContratoProps[]>([]);

  useEffect(() => {
  API.get("/contratos")
    .then((res) => {
      setContratos(res.data.data);
    })
    .catch((err) => {
      console.error(err.message);
    });
}, []);


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
          {contratos.map((contrato) => (
            <ContratoCard
              key={contrato.id}
              {...contrato}
              onEditar={() => handleEditar(contrato.id)}
              onExcluir={() => handleExcluir(contrato.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
