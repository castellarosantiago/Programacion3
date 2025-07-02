import React, { useState, useEffect } from 'react';

const ContadorMeditador = ({ duracion, imagenFondo }) => {
    const [estado, setEstado] = useState('inhalar');
    const [tiempoRestante, setTiempoRestante] = useState(duracion.inhalar);
    const [ciclo, setCiclo] = useState(0);
    const [activo, setActivo] = useState(false);

useEffect(() => {
    let intervalo;

    if (activo) {
        intervalo = setInterval(() => {
            setTiempoRestante((prevTiempo) => {
                if (prevTiempo > 0) {
                    return prevTiempo - 1;
                } else {
                    setEstado((prevEstado) => {
                        if (prevEstado === 'inhalar') {
                            setTiempoRestante(duracion.aguantar);
                            return 'aguantar';
                        } else if (prevEstado === 'aguantar') {
                            setTiempoRestante(duracion.exhalar);
                            return 'exhalar';
                        } else {
                            setCiclo((prevCiclo) => prevCiclo + 1);
                            setTiempoRestante(duracion.inhalar);
                            return 'inhalar';
                        }
                    });
                    return 0; // El valor real se actualiza por setTiempoRestante arriba
                }
            });
        }, 1000);
    }

    return () => clearInterval(intervalo);
}, [activo, duracion]);

    const iniciarMeditacion = () => {
        setActivo(true);
        setCiclo(0);
        setEstado('inhalar');
        setTiempoRestante(duracion.inhalar);
    };

    const pausarMeditacion = () => {
        setActivo(false);
    };

    const reiniciarMeditacion = () => {
        setActivo(false);
        setCiclo(0);
        setEstado('inhalar');
        setTiempoRestante(duracion.inhalar);
    };

    return (
        <div className="contador-meditador" style={{ backgroundImage: `url(${imagenFondo})` }}>
            <h1>{estado}</h1>
            <h2>{tiempoRestante} s</h2>
            <button onClick={iniciarMeditacion}>Iniciar</button>
            <button onClick={pausarMeditacion}>Pausar</button>
            <button onClick={reiniciarMeditacion}>Reiniciar</button>
            <p>Ciclo: {ciclo}</p>
        </div>
    );
};

export default ContadorMeditador;