const Header = () => {
  return (
    <div>
      <div className="flex justify-between text-3xl font-serif py-5">
        <div className="text-left">
          <p>Djalma Chaves</p>
          <p>Advogado</p>
        </div>
        <div className="text-right text-3xl">
          <p>Marcelo Chaves</p>
          <p>Advogado</p>
        </div>
      </div>
      <div className="text-center font-serif mb-6">
        <h1 className="text-xl font-bold">ESCRITÓRIO DE ADVOCACIA</h1>
        <h2 className="text-lg font-semibold">&</h2>
        <h1 className="text-xl font-bold">IMÓVEIS</h1>
        <p className="text-sm mt-1">Rua Municipalidade, 985 – sala 1110</p>
        <p>Tel: 991007732</p>
      </div>
    </div>
  );
}

export default Header;