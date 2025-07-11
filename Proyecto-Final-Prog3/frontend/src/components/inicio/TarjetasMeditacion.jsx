import React, { useEffect, useState } from 'react';

const PreferenciasGuardadas = () => {
  const [preferencias, setPreferencias] = useState([]);

  
  useEffect(() => {
    const obtenerPreferencias = async () => {
      try {
        const res = await fetch("http://localhost:3001/breath");
        const data = await res.json();
        setPreferencias(data);
      } catch (error) {
        console.error("Error al obtener las preferencias:", error);
      }
    };

    obtenerPreferencias();
  }, []);

  return (
    <div className="contenedor-preferencias">
      <h2>Preferencias Guardadas</h2>
      {preferencias.length === 0 ? (
        <p>Todavia no guardaste ninguna preferencia.</p>
      ) : (
        <div className="grid-preferencias">
          {preferencias.map((pref, index) => (
            <div key={index} className="card-preferencia">
              <h3>{pref.title}</h3>
              <p><strong>Inhalar:</strong> {pref.inhale} seg</p>
              <p><strong>Aguantar:</strong> {pref.hold} seg</p>
              <p><strong>Exhalar:</strong> {pref.exhale} seg</p>
              <p><strong>Ciclos:</strong> {pref.cicles}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreferenciasGuardadas;