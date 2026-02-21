import { useState } from "react";
import "./App.css";

function App() {
  const [capital, setCapital] = useState("");
  const [aporte, setAporte] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularJuros() {

    // A função pega os valores armazenados no estado pelos inputs, converte para número, trata a taxa, aplica a lógica condicional, calcula separadamente o crescimento do capital e dos aportes ao longo do tempo, soma os dois e atualiza o estado de resultado. Input → Estado → Função → Novo estado → Tela

    const capitalNum = Number(capital)
    const aporteNum = Number(aporte)
    const taxaNum = Number(taxa)
    const tempoNum = Number(tempo)

    const i = taxaNum / 100

    // 🛑 caso especial: taxa zero
    if (i === 0) {
      const total = capitalNum + aporteNum * tempoNum
      setResultado(total.toFixed(2))
      return
    }

    const montanteCapital =
      capitalNum * Math.pow(1 + i, tempoNum)

    const montanteAportes =
      aporteNum * ((Math.pow(1 + i, tempoNum) - 1) / i)

    const montanteTotal = montanteCapital + montanteAportes

    setResultado(montanteTotal.toFixed(2))
  }


  return (
    <div className="container space-y-10">
      <h1 className="text-4xl font-bold mb-6">Juros Compostos</h1>

      <div className="form flex flex-col md:flex-row justify-center gap-4">
        <input
          className="p-6 bg-gray-50 border border-gray-200 rounded-xl py-3 shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-sm"
          type="number"
          placeholder="Capital inicial"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />

        <input
          className="max-w-lg p-6 bg-gray-50 border border-gray-200 rounded-xl py-3 shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-sm"
          type="number"
          placeholder="Aporte mensal"
          value={aporte}
          onChange={(e) => setAporte(e.target.value)}
        />

        <input
          className="max-w-lg p-6 bg-gray-50 border border-gray-200 rounded-xl py-3 shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-sm"
          type="number"
          placeholder="Taxa de juros (% ao mês)"
          value={taxa}
          onChange={(e) => setTaxa(e.target.value)}
        />

        <input
          className="max-w-lg p-6 bg-gray-50 border border-gray-200 rounded-xl py-3 shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-sm"
          type="number"
          placeholder="Tempo (meses)"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />

        <button onClick={calcularJuros} className="border bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200">
          Calcular</button>

      </div>

      {resultado && (
            <p className="text-2xl mb-4">
              Montante final: R$ {resultado}
            </p>
          )}
    </div>
  );
}

export default App;
