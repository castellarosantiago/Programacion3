import React from 'react';
import ContadorMeditador from './ContadorMeditador';
import Personalizacion from './Personalizacion';

const duracionDefault = { inhalar: 4, aguantar: 4, exhalar: 4 };

const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido a la Meditación</h1>
      <ContadorMeditador duracion={duracionDefault} imagenFondo={null} />
      <Personalizacion/>
    </div>
  );
};

export default Inicio;