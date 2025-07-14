import React, { useState, useEffect } from 'react';
import ContadorMeditador from './ContadorMeditador';
import Personalizacion from './Personalizacion';
import TarjetasMeditacion from './TarjetasMeditacion';
import CategoriasImagenes from './CategoriasImagenes';

const Inicio = ({usuario}) => {
  const [personalizacion, setPersonalizacion] = useState({
    inhalar: 4,
    aguantar: 4,
    exhalar: 4,
    ciclos: 1,
    titulo: ''
  });

  const [preferencias, setPreferencias] = useState([]);
  const [imagenFondo, setImagenFondo] = useState(null);

  useEffect(() => {
    const guardadas = localStorage.getItem('preferencias');
    if (guardadas) {
      setPreferencias(JSON.parse(guardadas));
    }
  }, []);

  const handlePersonalizacionChange = (nueva) => {
    setPersonalizacion(nueva);
  };

  const guardarPreferencia = (nueva) => {
    const nuevaConUsuario = {...nueva, userId: usuario.id}
    const actualizadas = [...preferencias, nuevaConUsuario];
    localStorage.setItem("preferencias", JSON.stringify(actualizadas));
    setPreferencias(actualizadas);
  };

  const borrarPreferencia = (indexABorrar) => {
    const actualizadas = preferencias.filter((_, i) => i !== indexABorrar);
    localStorage.setItem("preferencias", JSON.stringify(actualizadas));
    setPreferencias(actualizadas);
  };

  return (
    <div>
      <ContadorMeditador duracion={personalizacion} backgroundImage = {imagenFondo} />
      <Personalizacion
        personalizacion={personalizacion}
        onChange={handlePersonalizacionChange}
        onGuardar={guardarPreferencia}
      />
      <TarjetasMeditacion
        preferencias={preferencias}
        onSeleccionar={handlePersonalizacionChange}
        onBorrar={borrarPreferencia}
      />
      <CategoriasImagenes onSeleccionarImagen={setImagenFondo}/>
    </div>
  );
};

export default Inicio;
