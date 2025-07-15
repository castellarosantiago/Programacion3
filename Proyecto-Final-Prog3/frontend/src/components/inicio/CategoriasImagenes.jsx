import React, { useEffect, useState } from 'react';
import '../../styles/categoriaImagenes.css'

function Card({ id, nombre, imagen, isSelected, seleccionarCard }) {
  return (
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={() => seleccionarCard(id)}
      style={imagen ? {backgroundImage :`url(${imagen})` }:{}}
    >
      <div className="card-title">{nombre}</div>
    </div>
  );
}

function GaleriaImagenes({onSeleccionarImagen}) {
  const [colecciones, setColecciones] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);

  useEffect(() => {
    const obtenerColecciones = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/categories'); 
        const data = await res.json();
        console.log('Categorias API: ', data);
        const mapeadas = data.map((categoria) => ({
          id: categoria.id_category,
          nombre: categoria.name,
          imagen: categoria.Images_categories[0]?.url_image || '', 
          imagenes: categoria.Images_categories, 
        }));

        console.log('colecciones: ', mapeadas);
        setColecciones(mapeadas);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };

    obtenerColecciones();
  }, []);

  const seleccionarCard = (id, imagen) => {
    setSeleccionada(id);
    onSeleccionarImagen(imagen);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="galeria-imagenes">
      {colecciones.map((coleccion) => (
        <Card
          key={coleccion.id}
          id={coleccion.id}
          nombre={coleccion.nombre}
          imagen={coleccion.imagen}
          isSelected={seleccionada === coleccion.id}
          seleccionarCard={() => seleccionarCard(coleccion.id, coleccion.imagen)}
        />
      ))}
    </div>
  );
}

export default GaleriaImagenes;
