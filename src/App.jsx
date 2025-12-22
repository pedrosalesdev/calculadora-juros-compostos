import { useState } from "react";
import "./App.css";

function App() {
  const [capital, setCapital] = useState("");
  const [aporte, setAporte] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");

  return (
    <div className="container">
      <h1>Calculadora de Juros Compostos</h1>

      <div className="form">
        <input
          type="number"
          placeholder="Capital inicial"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />

        <input
          type="number"
          placeholder="Aporte mensal"
          value={aporte}
          onChange={(e) => setAporte(e.target.value)}
        />

        <input
          type="number"
          placeholder="Taxa de juros (% ao mês)"
          value={taxa}
          onChange={(e) => setTaxa(e.target.value)}
        />

        <input
          type="number"
          placeholder="Tempo (meses)"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />

        <button>Calcular</button>
      </div>
    </div>
  );
}

export default App;
