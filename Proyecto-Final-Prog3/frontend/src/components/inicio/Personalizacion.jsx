import React, { useState } from 'react';

function Personalizacion() {
  const [titulo, setTitulo] = useState('');
  const [inhalExhal, setInhalExhal] = useState(7);
  const [mantener, setMantener] = useState(4);
  const [ciclos, setCiclos] = useState(1);


  const sumarIE = () => setInhalExhal(prev => prev + 1);
  const restarIE = () => setInhalExhal(prev => Math.max(1, prev - 1)); // Hacemos que no se pueda tener menos de 1 segundo en cada respiracion

  const sumarM = () => setMantener(prev => prev + 1);
  const restarM = () => setMantener(prev => Math.max(1, prev - 1)); 


  return (
    <div className="personalizacion">
      <div className="personalizacion-campos">
        <div>
            <span>Titulo</span>
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)}/>
        </div>
        <div>
          <span>Inhalacion/exhalacion</span>
          <button onClick={restarIE}>-</button>  
          <span>{inhalExhal}</span>
          <button onClick={sumarIE}>+</button>
        </div>
        <div>
          <span>Mantener</span>
          <button onClick={restarM}>-</button>  
          <span>{mantener}</span>
          <button onClick={sumarM}>+</button>
        </div>
        <div>
          <span>Ciclos</span>
          <input type="number" min="1" value={ciclos} onChange={e => setCiclos(Math.max(1, Number(e.target.value)))}/>
        </div>
      </div>
      <button> Guardar </button>
    </div>
  );
}

export default Personalizacion;