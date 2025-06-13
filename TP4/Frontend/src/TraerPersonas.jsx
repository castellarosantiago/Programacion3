import { useEffect, useState } from 'react';
import ListaTarjetas from './ListaTarjetas';

function TraerPersonas() {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/personas');
        if (!response.ok) {
          throw new Error('Error fetching personas');
        }
        const data = await response.json();
        setPersonas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonas();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ListaTarjetas personas={personas} />;
}

export default TraerPersonas;