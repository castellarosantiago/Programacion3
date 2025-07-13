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


    useEffect(() => {
    const guardadas = localStorage.getItem('preferencias');
    if (guardadas) {
      setPreferencias(JSON.parse(guardadas));
    }
  }, []);
  const handlePersonalizacionChange = (nuevaPersonalizacion) => {
    setPersonalizacion(nuevaPersonalizacion);
  };

  const borrarPersonalizacion = (idABorrar) => {
    const nuevaPersonalizacion = PreferenciasGuardadas.filter((_, index) => index !== idABorrar)
    setPersonalizacion(nuevaPersonalizacion);
  }

  return (
    <div>

      {/*<ContadorMeditador duracion={personalizacion} backgroundImage={fondoDesdeDB} /> */}
      <ContadorMeditador duracion={personalizacion} imagenFondo={null} />
      <Personalizacion  personalizacion={personalizacion} onChange={handlePersonalizacionChange}/>
      <TarjetasMeditacion 
      PreferenciasGuardadas = {PreferenciasGuardadas}
      onSeleccionar={handlePersonalizacionChange}
      onBorrar={borrarPersonalizacion}
      />
      <CategoriasImagenes/>
    </div>
  );
};

export default Inicio;