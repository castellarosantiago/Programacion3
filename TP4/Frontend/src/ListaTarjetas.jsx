import TarjetaPersona from './TarjetaPersona';

function ListaTarjetas({ personas }) {
  return (
    <div className="cards-container">
      {personas.map(persona => (
        <TarjetaPersona key={persona.id} persona={persona} />
      ))}
    </div>
  );
}

export default ListaTarjetas;