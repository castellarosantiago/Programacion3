import React, { useState } from "react";
import '../../styles/login.css';

const Login = ({ onLoginExitoso }) => {
    const [isRegistrado, setIsRegistrado] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const toggleRegistrado = () => {
        setIsRegistrado(!isRegistrado);
        setError('');
    };


     const handleLoginRegistro = async () => {
         if (pass.length < 8) {
             setError('La contraseña debe tener al menos 8 caracteres.');
             return;
         }

         const url = isRegistrado ? 'http://localhost:3001/api/auth/registro' : 'http://localhost:3001/api/auth/login';

         try {
             const res = await fetch(url, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({ email, pass }) 
             });

             const data = await res.json();

             if (!res.ok) {
                 setError(data.mensaje || 'Error de autenticacion');
                 return;
             }


             onLoginExitoso(data.usuario);

         } catch (err) {
             console.error('Error:', err);
             setError('Error de conexion con el servidor');
         }
     };


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