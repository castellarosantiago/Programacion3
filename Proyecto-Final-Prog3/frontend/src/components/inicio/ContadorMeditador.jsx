import React, { useState, useEffect, useRef } from 'react';

const fases = ['inhalar', 'aguantar', 'exhalar'];

const ContadorMeditador = ({ duracion }) => {
  // Usar ref para siempre tener el valor más reciente de duracion
  const duracionRef = useRef(duracion);
  useEffect(() => { duracionRef.current = duracion; }, [duracion]);

  const [estado, setEstado] = useState('inhalar');
  const [tiempoRestante, setTiempoRestante] = useState(duracion.inhalar);
  const [ciclo, setCiclo] = useState(1);
  const [activo, setActivo] = useState(false);

  // Sincronizar tiempoRestante si cambian los parámetros y no está activo
  useEffect(() => {
    if (!activo) {
      setEstado('inhalar');
      setTiempoRestante(duracion.inhalar);
      setCiclo(1);
    }
  }, [duracion, activo]);

  useEffect(() => {
    if (!activo) return;
    let intervalo = setInterval(() => {
      setTiempoRestante(prev => {
        if (prev > 1) return prev - 1;
        // Cambio de fase
        let idx = fases.indexOf(estado);
        if (idx < 2) {
          // Siguiente fase
          const siguiente = fases[idx + 1];
          setEstado(siguiente);
          setTiempoRestante(duracionRef.current[siguiente]);
        } else {
          // Fin de ciclo
          if (ciclo < duracionRef.current.ciclos) {
            setEstado('inhalar');
            setTiempoRestante(duracionRef.current.inhalar);
            setCiclo(ciclo + 1);
          } else {
            setActivo(false);
          }
        }
        return 0;
      });
    }, 1000);
    return () => clearInterval(intervalo);
  }, [activo, estado, ciclo]);

  const iniciarMeditacion = () => {
    setActivo(true);
    setEstado('inhalar');
    setTiempoRestante(duracion.inhalar);
    setCiclo(1);
  };

  const pausarMeditacion = () => setActivo(false);

  const reiniciarMeditacion = () => {
    setActivo(false);
    setEstado('inhalar');
    setTiempoRestante(duracion.inhalar);
    setCiclo(1);
  };

  return (
    <div className="contador-meditador">
      <h1>{estado}</h1>
      <h2>{tiempoRestante} s</h2>
      <button onClick={iniciarMeditacion}>Iniciar</button>
      <button onClick={pausarMeditacion}>Pausar</button>
      <button onClick={reiniciarMeditacion}>Reiniciar</button>
      <p>Ciclo: {ciclo} / {duracion.ciclos}</p>
    </div>
  );
};

export default ContadorMeditador;