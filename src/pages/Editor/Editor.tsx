import { useRef, useState } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import ToggleSection from '../../components/toggleSection/ToggleSection';
import Input from '../../components/Input/Input';
import Navbar from '../../components/navbar/Navbar';
import Checkbox from '../../components/checkbox/Checkbox';
import Header from '../../components/Header/Header';
import { Building, Paperclip, PersonStanding, Wallet } from 'lucide-react';

export default function EditorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Inputs
  const [endereco, setEndereco] = useState("<ENDEREÇO>");
  const [locador, setLocador] = useState("<LOCADOR>");
  const [nomeFiador, setNomeFiador] = useState("<FIADOR>");
  const [estadoCivilLocador, setEstadoCivilLocador] = useState("<ESTADO CIVIL LOCADOR>");
  const [documentosLocador, setDocumentosLocador] = useState("<DOCUMENTOS LOCADOR>");
  const [nomeLocatario, setNomeLocatario] = useState("<NOME LOCATARIO>");
  const [estadoCivilLocatario, setEstadoCivilLocatario] = useState("<ESTADO CIVIL LOCATARIO>");
  const [profissaoLocatario, setProfissaoLocatario] = useState("<PROFISSAO LOCATARIO>");
  const [documentosLocatario, setDocumentosLocatario] = useState("<DOCUMENTOS LOCATARIO>");
  const [prazoImovel, setPrazoImovel] = useState("<PRAZO>");
  const [diaImovelInicial, setDiaImovelInicial] = useState("<DIA INICIAL>");
  const [mesImovelInicial, setMesImovelInicial] = useState("<MÊS INICIAL>");
  const [anoImovelInicial, setAnoImovelInicial] = useState("<ANO INICIAL>");
  const [diaImovelFinal, setDiaImovelFinal] = useState("<DIA FINAL>");
  const [mesImovelFinal, setMesImovelFinal] = useState("<MÊS FINAL>");
  const [anoImovelFinal, setAnoImovelFinal] = useState("<ANO FINAL>");
  const [rendaMensal, setRendaMensal] = useState("<RENDA MENSAL>");
  const [rendaAnual, setRendaAnual] = useState("<RENDA ANUAL>");
  const [valorGarantia, setValorGarantia] = useState("<VALOR GARANTIA>");
  const [textoPersonalizado, setTextoPersonalizado] = useState("<TEXTO PERSONALIZADO>");


  // Tooltips
  const [showLocadorInfo, setShowLocadorInfo] = useState(false);
  const [showLocatarioInfo, setShowLocatarioInfo] = useState(false);
  const [showFiadorInfo, setShowFiadorInfo] = useState(false);
  const [showImovelInfo, setShowImovelInfo] = useState(false);

  // Checkboxes

  const [tipoGarantia, setTipoGarantia] = useState("fianca");

  // Download PDF

  const downloadRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    const element = downloadRef.current;
    if (!element) return;

    const opt = {
      margin: 10,
      filename: 'Contrato.pdf',
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      }
    };

    html2pdf()
      .set(opt)
      .from(element)
      .toPdf()
      .get('pdf')
      .then((pdf: any) => {
        const totalPages = pdf.internal.getNumberOfPages();

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          pdf.text(`${i}`, pdf.internal.pageSize.getWidth() - 30, 15);
        }
      })
      .save();
  };

  return (
    <div className="flex">
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      >
        {/* Tooltip Imóvel */}
        <ToggleSection
          icon={<Building />}
          label="Imóvel"
          show={showImovelInfo}
          setShow={setShowImovelInfo}
        >
          <div className="space-y-2">
            <Input
              type='text'
              label="Endereço do Imóvel"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <Input
              type='text'
              label="Prazo (em meses)"
              value={prazoImovel}
              onChange={(e) => setPrazoImovel(e.target.value)}
            />
            <Input
              type='text'
              label="Renda Mensal"
              value={rendaMensal}
              onChange={(e) => setRendaMensal(e.target.value)}
            />
            <Input
              type='text'
              label="Renda Anual"
              value={rendaAnual}
              onChange={(e) => setRendaAnual(e.target.value)}
            />

            <div className="grid grid-cols-3 gap-2">
              <Input
                type='text'
                label="Dia Inicial"
                value={diaImovelInicial}
                onChange={(e) => setDiaImovelInicial(e.target.value)}
              />
              <Input
                type='text'
                label="Mês Inicial"
                value={mesImovelInicial}
                onChange={(e) => setMesImovelInicial(e.target.value)}
              />
              <Input
                type='text'
                label="Ano Inicial"
                value={anoImovelInicial}
                onChange={(e) => setAnoImovelInicial(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Input
                type='text'
                label="Dia Final"
                value={diaImovelFinal}
                onChange={(e) => setDiaImovelFinal(e.target.value)}
              />
              <Input
                type='text'
                label="Mês Final"
                value={mesImovelFinal}
                onChange={(e) => setMesImovelFinal(e.target.value)}
              />
              <Input
                type='text'
                label="Ano Final"
                value={anoImovelFinal}
                onChange={(e) => setAnoImovelFinal(e.target.value)}
              />
            </div>

            {tipoGarantia === "caucao" && (
              <Input
                type='text'
                label="Valor garantia"
                value={valorGarantia}
                onChange={(e) => setValorGarantia(e.target.value)}
              />
            )}

            {tipoGarantia === "personalizado" && (
              <div>
                <label className="block text-sm text-white">Texto personalizado:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  value={textoPersonalizado}
                  onChange={(e) => setTextoPersonalizado(e.target.value)}
                />
              </div>
            )}
          </div>
        </ToggleSection>

        {/* Tooltip Locador */}
        <ToggleSection
          icon={<Wallet />}
          label="Locador"
          show={showLocadorInfo}
          setShow={setShowLocadorInfo}
        >
          <div className="space-y-2">
            <Input
              type="text"
              label="Locador"
              value={locador}
              onChange={(e) => setLocador(e.target.value)}
            />
            <Input
              type="text"
              label="Estado civil"
              value={estadoCivilLocador}
              onChange={(e) => setEstadoCivilLocador(e.target.value)}
            />
            <Input
              type="text"
              label="Documentos"
              value={documentosLocador}
              onChange={(e) => setDocumentosLocador(e.target.value)}
            />
          </div>
        </ToggleSection>

        {/* Tooltip Fiador*/}
        <ToggleSection
          icon={<PersonStanding />}
          label="Fiador"
          show={showFiadorInfo}
          setShow={setShowFiadorInfo}
        >
          <Input
            type="text"
            label="Fiador"
            value={nomeFiador}
            onChange={(e) => setNomeFiador(e.target.value)}
          />
        </ToggleSection>

        {/* Tooltip Locatário */}
        <ToggleSection
          icon={<Paperclip />}
          label="Locatário"
          show={showLocatarioInfo}
          setShow={setShowLocatarioInfo}
        >
          <div className="space-y-2">
            <div className="space-y-2">
              <Input
                type='text'
                label="Nome"
                value={nomeLocatario}
                onChange={(e) => setNomeLocatario(e.target.value)}
              />
              <Input
                type='text'
                label="Estado civil"
                value={estadoCivilLocatario}
                onChange={(e) => setEstadoCivilLocatario(e.target.value)}
              />
              <Input
                type='text'
                label="Profissão"
                value={profissaoLocatario}
                onChange={(e) => setProfissaoLocatario(e.target.value)}
              />
              <Input
                type='text'
                label="Documentos"
                value={documentosLocatario}
                onChange={(e) => setDocumentosLocatario(e.target.value)}
              />
            </div>
          </div>
        </ToggleSection>

        <div className="space-y-2 mb-4">
          <Checkbox label="fianca" tipoGarantia={tipoGarantia} setTipoGarantia={setTipoGarantia} />
          <Checkbox label="caucao" tipoGarantia={tipoGarantia} setTipoGarantia={setTipoGarantia} />
          <Checkbox label="personalizado" tipoGarantia={tipoGarantia} setTipoGarantia={setTipoGarantia} />
        </div>

        <div>
          <button
            type='button'
            className='mt-6 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded cursor-pointer'
            onClick={handleDownloadPdf}
          >
            Baixar contrato
          </button>
        </div>
      </Navbar>

      <div className="flex-1 bg-gray-50">
        <div className="flex items-center justify-center bg-gray-200 py-10 px-4 min-h-screen">
          <div ref={downloadRef} className=" bg-white w-[794px] min-h-[1123px] p-25">
            <Header />

            {/* Conteúdo */}
            <div className="text-justify font-serif text-xl space-y-4">
              <p className='py-10 indent-48'>
                Instrumento particular de contrato de locação do imóvel sito nesta cidade na {endereco}, como abaixo se declara, realizado entre {locador}, brasileiro, {estadoCivilLocador}, Advogado, {documentosLocador}, residente e domiciliado nesta cidade, como locador e {nomeLocatario}, brasileira, {estadoCivilLocatario}, {profissaoLocatario}, {documentosLocatario}, como locatário.
              </p>

              <p className='py-10 break-inside-avoid indent-48'>
                {locador}, brasileiro, {estadoCivilLocador}, advogado, {documentosLocador}, residente e domiciliado nesta cidade, como locador e {nomeLocatario}, brasileira, {estadoCivilLocatario}, professora, {documentosLocatario} como locatária, tem justos e contratados a locação do imóvel sito nesta cidade à {endereco}, mediante às cláusulas e condições que mutuamente se obrigam e aceitam:
              </p>

              <p className='py-5 break-inside-avoid'><p>1ª Prazo:</p><br />
                <p className='indent-48'>
                  O prazo justo e contratado da presente locação é de {prazoImovel} meses a começar no dia {diaImovelInicial} de {mesImovelInicial} de {anoImovelInicial} e terminar no dia {diaImovelFinal} de {mesImovelFinal} de {anoImovelFinal}
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>2ª Reajuste:</p><br />
                <p className='indent-48'>
                  A presente locação será reajustada de acordo com os índices emanados pelo Governo Federal, em períodos de {prazoImovel} meses;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>3ª Objeto:</p><br />
                <p className='indent-48'>
                  O Objeto da presente locação é imóvel situado nesta cidade à {endereco};
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>4ª Destinação:</p><br />
                <p className='indent-48'>
                  A locatário (a) utilizará o imóvel exclusivamente para fins residenciais, destino que não poderá ser alterado sem o consentimento expresso do locador, sendo vedado qualquer cessão, transferência ou sublocação ainda quando parcial, temporária, gratuita ou onerosa;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>5ª Devolução:</p><br />
                <p className='indent-48'>
                  Se o locatário (a) devolver o imóvel antes de transcorrido o prazo estipulado na cláusula 1ª (primeira), será responsável pelo pagamento da multa de 1 (um) mês de aluguel. Em qualquer condição deverá devolver o imóvel locado totalmente pintado nas cores branco gelo e cromo com tinta da marca coral, bem como as benfeitorias em perfeitas condições de asseio, conservação e habitabilidade, sendo responsável pela quitação das contas de energia elétrica e água;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>6ª Renda:</p><br />
                <p className='indent-48'>
                  Durante os {prazoImovel} meses o locatário (a) pagará a renda anual de R$ {rendaAnual} em parcelas mensais de R$ {rendaMensal}, observando-se o mencionado na cláusula 2ª (segunda) do presente contrato;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>7ª Lugar do Pagamento:</p><br />
                <p className='indent-48'>
                  As prestações mensais serão quitadas no Escritório de Advocacia, situado na Rua Municipalidade, 985, Ed. Mirai Office sala 1110, ou aonde o locador determinar, sempre nesta capital, até no máximo ao 5º (quinto) dia do mês subsequente ao vencido;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>8ª Multa:</p><br />
                <p className='indent-48'>
                  Os alugueis pagos fora do prazo estabelecido na cláusula anterior deste contrato serão acrescidos de 02% (dois por cento), a título de multa, acrescido de juros e correção;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>9ª Obras e melhoramentos:</p><br />
                <p className='indent-48'>
                  As benfeitorias ou acessões introduzidas de qualquer natureza aderirão automaticamente ao imóvel locado. O consentimento por escrito do locador, todavia, será imprescindível para realização de qualquer benfeitoria, a locatário renuncia desde logo, irrevogavelmente, a todo direito de indenização, compensação ou retenção, relativos aos valores despendidos;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>10ª Estado do Imóvel:</p><br />
                <p className='indent-48'>
                  O imóvel é entregue em estado perfeito de conservação, higiene e habitabilidade, com todas as instalações em perfeito funcionamento, tendo o locatário (a) realizado a devida inspeção, pelo que se obriga a assim manter, conservar e devolver, quando finda ou rescindida a locação, às suas custas os reparos que fizerem necessários, sendo locado com Box de alumínio e armário na cozinha;
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>11ª Obrigações do locatário:</p><br />
                <p className='indent-48'>
                  O aluguel será inteiramente líquido respeitando-se a legislação sobre a renda, sendo de responsabilidade do locatário (a):<br />
                  a) Taxas de água e energia elétrica, ficando o locatário (a) com a obrigação de colocar em seu nome as respectivas contas junto à Celpa e Cosanpa, e posteriormente retornar ao nome anterior após a locação;<br />
                  b) O locatário é impedido de sublocar o imóvel;<br />
                  c) IPTU (Imposto Predial Territorial Urbano).
                </p>
              </p>

              <p className='py-5 break-inside-avoid'><p>12ª Visitas:</p><br />
                <p className='indent-48'>
                  Poderá o locador visitar o imóvel locado, avisando com antecedência para sugestões, reclamações ou vistoria;
                </p>
              </p>

              {tipoGarantia === "fianca" && (
                <p className='py-5 break-inside-avoid'>
                  <p>13ª Garantia:</p><br />
                  <p className='indent-48'>
                    Como garantia da locação, assume o Sr. {nomeFiador}, como fiador e principal pagador de todas as obrigações deste contrato;
                  </p>
                </p>
              )}

              {tipoGarantia === "caucao" && (
                <p className='py-5 break-inside-avoid'>
                  <p>13ª Garantia:</p><br />
                  <p className='indent-48'>
                    O locador oferece como garantia o valor de R$ {valorGarantia}, como caução, importância que ao final da locação será devolvida ao locador, estando quites todas as obrigações assumidas pela locatária no presente contrato.
                  </p>
                </p>
              )}

              {tipoGarantia === "personalizado" && (
                <p className='py-5 break-inside-avoid'>
                  <p>13ª Garantia:</p><br />
                  <p className='indent-48'>
                    {textoPersonalizado}
                  </p>
                </p>
              )}

              <p className='py-5 break-inside-avoid'>
                <p>14ª Foro:</p><br />
                <p className='indent-48'>
                  Será o Foro de Belém o competente para dirimir controvérsias judiciais decorrentes do presente contrato. E por estarem justos e contratados, firmam o presente instrumento na presença de duas testemunhas.
                </p>
              </p>

              <p className='text-right break-inside-avoid py-10'>Belém, ___________ de __________________ de 2025</p>

              <p className='break-inside-avoid py-5'>Locador – {locador}</p>
              <hr />
              <p className='break-inside-avoid py-5'>Locatário – {nomeLocatario}</p>
              <hr />
              {
                tipoGarantia === "fianca" ?
                  <div>
                    <p className='break-inside-avoid py-5'>Fiador – {nomeFiador}</p>
                    <hr />
                  </div> : <></>
              }
              <p className='break-inside-avoid py-5'>Testemunha</p>
              <hr />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}