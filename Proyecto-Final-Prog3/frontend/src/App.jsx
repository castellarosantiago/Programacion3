import React, { useState } from 'react';
import Inicio from './components/inicio/Inicio';
import Login from "./components/login/Login"
import '../src/index.css'
function App() {
  const [usuario, setUsuario] = useState(null);
  const handleLoginRegistro = (usuario) => {
    setUsuario(usuario);
  }
  return (
    <div className="App">
      {!usuario ? (
        <Login onLoginExitoso = {handleLoginRegistro}/>
      ):(      
      <Inicio />
       )}
    </div>
  );
}

export default App;