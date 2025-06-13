import { useState, useEffect } from 'react';
import TraerPersonas from './TraerPersonas';
import './App.css';

function App() {
  const [personas, setPersonas] = useState([]);

  return (
    <div className="App">
      <h1>Lista de Personas</h1>
      <TraerPersonas setPersonas={setPersonas} />
      <ListaTarjetas personas={personas} />
    </div>
  );
}

export default App;