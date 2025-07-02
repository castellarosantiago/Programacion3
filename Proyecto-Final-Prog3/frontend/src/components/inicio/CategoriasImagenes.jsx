import React from 'react';

const coleccion_tarjetas = [
    {id: 1, nombre: 'Playa', imagenes: ''},
    {id: 2, nombre: 'Espacio', imagenes: ''},
    {id: 3, nombre: 'Montañas', imagenes: ''},
    {id: 4, nombre: 'Fogatas', imagenes: ''},
    {id: 5, nombre: 'Cascadas', imagenes: ''},
    {id: 6, nombre: 'Ciudad', imagenes: ''}
];


function CategoriasImagenes({ onSeleccionar }) {
  return (
    <div className="galeria">
      {coleccion_tarjetas.map((coleccion) => (
        <div
          key={coleccion.id}
          className="tarjeta"
          onClick={() => onSeleccionar && onSeleccionar(coleccion.id)}
        >
          <h3>{coleccion.nombre}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoriasImagenes;