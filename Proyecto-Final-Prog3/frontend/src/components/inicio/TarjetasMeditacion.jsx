import React, { useState } from 'react'; // Importamos el React y el useState a react para poder manejar el estado

// Componente principal para manejar las tarjetas
const TarjetasMeditacion = () => {
  const [tarjetas, setTarjetas] = useState([]); // Estado donde se almacenan las tarjetas ya creadas
  const [formData, setFormData] = useState({ titulo: '', duracion: '', etapas: '' }); // Estado para el manejo de los datos

  // Actualiza los datos del formulario cuando el usuario escribe
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Agrega nuevas tarjetas al  estado
  const agregarTarjeta = () => {
    setTarjetas([...tarjetas, { ...formData, id: Date.now() }]);
    setFormData({ titulo: '', duracion: '', etapas: '' }); // Limpia el formulario
  };

  // Elimina dicha tarjeta por su id
  const eliminarTarjeta = (id) => {
    setTarjetas(tarjetas.filter((tarjeta) => tarjeta.id !== id));
  };

  // Edita una tarjeta ya existente por su id
  const editarTarjeta = (id) => {
    const tarjeta = tarjetas.find((tarjeta) => tarjeta.id === id);
    if (tarjeta) {
      setFormData(tarjeta);
      eliminarTarjeta(id); // Elimina dicha tarjeta para remplazarla por la editada
    }
  };

  // Muestra el formulario y las tarjetas creadas
  return (
    <div>
      <h1>Gestión de Meditaciones</h1>
      <div>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="duracion"
          placeholder="Duración de ciclos"
          value={formData.duracion}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="etapas"
          placeholder="Etapas"
          value={formData.etapas}
          onChange={handleInputChange}
        />
        <button onClick={agregarTarjeta}>Agregar Tarjeta</button>
      </div>
      <div>
        {tarjetas.map((tarjeta) => (
          <div key={tarjeta.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{tarjeta.titulo}</h2>
            <p>Duración: {tarjeta.duracion}</p>
            <p>Etapas: {tarjeta.etapas}</p>
            <button onClick={() => eliminarTarjeta(tarjeta.id)}>Eliminar</button>
            <button onClick={() => editarTarjeta(tarjeta.id)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarjetasMeditacion; // Exporta el componente ya creado para poder usarlo en otros archivos