import React, { useState } from 'react';
import ContadorMeditador from './ContadorMeditador';
import Personalizacion from './Personalizacion';
import TarjetasMeditacion from './TarjetasMeditacion';
import CategoriasImagenes from './CategoriasImagenes';


//const duracionDefault = { inhalar: 4, aguantar: 4, exhalar: 4 };



const Inicio = () => {
  const [personalizacion, setPersonalizacion] = useState({
    inhalar: 4,
    aguantar: 4,
    exhalar: 4,
    ciclos: 1,
    titulo: ''
  });

  const handlePersonalizacionChange = (nuevaPersonalizacion) => {
    setPersonalizacion(nuevaPersonalizacion);
  };

  return (
    <div>
      <h1>Bienvenido a la Meditación</h1>
      <ContadorMeditador duracion={personalizacion} imagenFondo={null} />
      <Personalizacion  personalizacion={personalizacion} onChange={handlePersonalizacionChange}/>
      <TarjetasMeditacion/>
      <CategoriasImagenes/>
    </div>
  );
};

export default Inicio;