import React, { useState } from "react";
import '../../styles/login.css';

const Login = ({ onLoginExitoso }) => {
    const [isRegistrado, setIsRegistrado] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    //PRUEBAS EN LOCAL - DESCOMENTAR
    /* const usuarioHardcodeado = {
    id: 1,
    email: "demo@prueba.com",
    password: "12345678", // mínimo 8 caracteres
    preferencias: [
      {
        title: "Relajación básica",
        inhale: 4,
        hold: 4,
        exhale: 4,
        cicles: 3,
        userId: 1
      }
    ]
  };*/

    const toggleRegistrado = () => {
        setIsRegistrado(!isRegistrado);
        setError('');
    };

     //cuando se inicia sesion, se traen las preferencias del id de ese usuario,
     //asi que al guardarlas, las preferencias deben guardar el id del usuario actual
     const handleLoginRegistro = async () => {
         if (pass.length < 8) {
             setError('La contraseña debe tener al menos 8 caracteres.');
             return;
         }

         const url = isRegistrado ? 'http://localhost:3001/registro' : 'http://localhost:3001/login';

         try {
             const res = await fetch(url, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({ email, pass }) // usar "contrasena" si tu backend lo espera así
             });

             const data = await res.json();

             if (!res.ok) {
                 setError(data.mensaje || 'Error de autenticacion');
                 return;
             }

             // guardar usuario logueado
             localStorage.setItem('usuarioActual', JSON.stringify(data.usuario));
             localStorage.setItem('preferencias', JSON.stringify(data.usuario.preferencias || []));

             // callback para pasar el user al App
             onLoginExitoso(data.usuario);

         } catch (err) {
             console.error('Error:', err);
             setError('Error de conexion con el servidor');
         }
     };


     //PRUEBAS EN LOCAL - DESCOMENTAR
 /*    const handleLoginRegistro = async () => {
    if (pass.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Simulación de login sin backend
    if (!isRegistrado) {
      // INICIO DE SESIÓN
      if (email === usuarioHardcodeado.email && pass === usuarioHardcodeado.password) {
        // Guardas en localStorage
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioHardcodeado));
        localStorage.setItem('preferencias', JSON.stringify(usuarioHardcodeado.preferencias));

        onLoginExitoso(usuarioHardcodeado);
      } else {
        setError("Usuario o contraseña incorrectos.");
      }
    } else {
      // REGISTRO SIMULADO
      setError("Registro simulado: aún no está conectado al backend.");
    }
  };*/

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2>{isRegistrado ? 'Ingrese sus datos para el registro' : 'Ingrese a su cuenta'}</h2>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button onClick={handleLoginRegistro}>
                    {isRegistrado ? 'Registrarse' : 'Iniciar sesión'}
                </button>
                <p className="alternar-modo" onClick={toggleRegistrado}>
                    {isRegistrado
                        ? '¿Ya tiene una cuenta? Inicie sesión'
                        : '¿No tiene una cuenta? Regístrese'}
                </p>
            </div>
        </div>
    );
};

export default Login;
