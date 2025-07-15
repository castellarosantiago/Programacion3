import React, { useState, useEffect, useCallback } from 'react';
import ContadorMeditador from './ContadorMeditador';
import Personalizacion from './Personalizacion';
import TarjetasMeditacion from './TarjetasMeditacion';
import GaleriaImagenes from './CategoriasImagenes';

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

   // muestra las preferencias ya guardadas
const cargarPreferencias = useCallback(async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/preferences/${usuario.id}`);
    
    if (response.ok) {
      const data = await response.json();
      setPreferencias(data);
    } 
  } catch (error) {
    console.error("Error al obtener las preferencias", error);
    setPreferencias([]);
  }
}, [usuario.id]);

  // useEffect(() => {
  //   if (usuario) {
  //     cargarPreferencias();
  //   }
  // }, [usuario]);

  
  useEffect(() => {
    cargarPreferencias();
  }, [cargarPreferencias]);

  const handlePersonalizacionChange = (nueva) => {
    setPersonalizacion(nueva);
  };

  const borrarPreferencia = async (id_breath) => {
    try {
      setPreferencias(prev => prev.filter(pref => pref.id_breath !== id_breath));
      
      const response = await fetch(`http://localhost:3001/api/preferences/${id_breath}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        await cargarPreferencias();
        throw new Error('Error al borrar la preferencia');
      } 

    } catch (error) {
      console.error("Error al borrar la preferencia:", error);
      alert("Error al borrar la preferencia");
      await cargarPreferencias();

    }
  };

  // recarga preferencias después de guardar una nueva
  const onPreferenciaGuardada = async () => {
    await cargarPreferencias();
  };

  return (
    <div>
      <h4>Gracias por usar MeditApp!</h4>
      <ContadorMeditador duracion={personalizacion}  backgroundImage = {imagenFondo}/>
      <Personalizacion
        personalizacion={personalizacion}
        onChange={handlePersonalizacionChange}
        onPreferenciaGuardada={onPreferenciaGuardada}
        usuario={usuario}
      />
      <TarjetasMeditacion
        preferencias={preferencias}
        onSeleccionar={handlePersonalizacionChange}
        onBorrar={borrarPreferencia}
      />
      <GaleriaImagenes  onSeleccionarImagen={setImagenFondo}/>
    </div>
  );
};

export default Inicio;