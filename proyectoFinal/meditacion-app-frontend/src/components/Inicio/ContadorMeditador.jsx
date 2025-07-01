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
                setTiempoRestante((prev) => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        if (estado === 'inhalar') {
                            setEstado('aguantar');
                            return duracion.aguantar;
                        } else if (estado === 'aguantar') {
                            setEstado('exhalar');
                            return duracion.exhalar;
                        } else {
                            setCiclo((prev) => prev + 1);
                            setEstado('inhalar');
                            return duracion.inhalar;
                        }
                    }
                });
            }, 1000);
        }

        return () => clearInterval(intervalo);
    }, [activo, estado, duracion]);

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