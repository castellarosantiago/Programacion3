import { useEffect, useState } from 'react';
import ListaTarjetas from './ListaTarjetas';

function TraerPersonas() {
  const [personas, setPersonas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/personas')
      .then(res => res.json())
      .then(data => {
        setPersonas(data);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return <ListaTarjetas personas={personas} />;
}

export default TraerPersonas;