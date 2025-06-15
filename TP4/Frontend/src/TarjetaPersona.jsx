// function TarjetaPersona({ persona }) {
//   return (
//     <div style={{
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       padding: '1rem',
//       width: '200px',
//       boxShadow: '2px 2px 8px #eee'
//     }}>
//       <h3>{persona.nombre} {"$persona.apodo"} {persona.apellido}</h3>
//       <p>Edad: {persona.edad}</p>
//       <p>Email: {persona.email}</p>
//     </div>
//   );
// }

// export default TarjetaPersona;

function TarjetaPersona({ persona }) {
  return (
    <div className="card-persona">
      <h3>{persona.nombre} "{persona.apodo}" {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
    </div>
  );
}

export default TarjetaPersona;