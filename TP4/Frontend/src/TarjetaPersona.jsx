import React from 'react';
import './TarjetaPersona.css'; // Assuming you want to style this component

const TarjetaPersona = ({ persona }) => {
  return (
    <div className="tarjeta-persona">
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
    </div>
  );
};

export default TarjetaPersona;