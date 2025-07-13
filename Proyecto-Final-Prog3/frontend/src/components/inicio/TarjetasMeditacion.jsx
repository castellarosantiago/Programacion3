// import React, { useEffect, useState } from 'react';
// import '../../styles/tarjetasMeditacion.css'
// const TarjetasMeditacion = ({preferencias, onSeleccionar, onBorrar}) => {

  
//   useEffect(() => {
//     const datosGuardados = localStorage.getItem("preferencias");
//     if(datosGuardados){
//       setPreferencias(JSON.parse(datosGuardados));
//     }
//     //VERSION PARA BACKEND
//     // const obtenerPreferencias = async () => {
//     //   try {
//     //     const res = await fetch("http://localhost:3001/breath");
//     //     const data = await res.json();
//     //     setPreferencias(data);
//     //   } catch (error) {
//     //     console.error("Error al obtener las preferencias:", error);
//     //   }
//     // };

//     //obtenerPreferencias();
//   }, []);

//   return (
//     <div className="contenedor-preferencias">
//       <h2>Preferencias Guardadas</h2>
//       {preferencias.length === 0 ? (
//         <p>Todavia no guardaste ninguna preferencia.</p>
//       ) : (
//         <div className="grid-preferencias">
//           {preferencias.map((pref, index) => (
//             <div key={index} className="card-preferencia">
//               <h3>{pref.title}</h3>
//               <p><strong>Inhalar:</strong> {pref.inhale} seg</p>
//               <p><strong>Aguantar:</strong> {pref.hold} seg</p>
//               <p><strong>Exhalar:</strong> {pref.exhale} seg</p>
//               <p><strong>Ciclos:</strong> {pref.cicles}</p>
//               <button onClick={() =>
//                 onSeleccionar({
//                   titulo: pref.title,
//                   inhalar: pref.inhale, 
//                   aguantar: pref.hold,
//                   exhalar: pref.exhale, 
//                   ciclos: pref.cicles
//                 })
//               }>Iniciar</button>
//               <button className='btn-borrar' onClick={() => onBorrar(index)}>
//                 Borrar</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

//export default TarjetasMeditacion;

import React from 'react';
import '../../styles/tarjetasMeditacion.css'

const TarjetasMeditacion = ({ preferencias, onSeleccionar, onBorrar }) => {
  return (
    <div className="contenedor-preferencias">
      <h2>Preferencias Guardadas</h2>
      {preferencias.length === 0 ? (
        <p>Todavía no guardaste ninguna preferencia.</p>
      ) : (
        <div className="grid-preferencias">
          {preferencias.map((pref, index) => (
            <div key={index} className="card-preferencia">
              <h3>{pref.title}</h3>
              <p><strong>Inhalar:</strong> {pref.inhale} seg</p>
              <p><strong>Aguantar:</strong> {pref.hold} seg</p>
              <p><strong>Exhalar:</strong> {pref.exhale} seg</p>
              <p><strong>Ciclos:</strong> {pref.cicles}</p>
              <button
                onClick={() =>
                  onSeleccionar({
                    titulo: pref.title,
                    inhalar: pref.inhale,
                    aguantar: pref.hold,
                    exhalar: pref.exhale,
                    ciclos: pref.cicles
                  })
                }
              >
                Iniciar
              </button>
              <button className="btn-borrar" onClick={() => onBorrar(index)}>
                Borrar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TarjetasMeditacion;
