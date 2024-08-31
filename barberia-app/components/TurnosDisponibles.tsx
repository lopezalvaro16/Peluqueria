"use client";

import React from 'react';

interface TurnosDisponiblesProps {
  turnos: string[];
  onSeleccionarTurno: (turno: string) => void;
}

const TurnosDisponibles: React.FC<TurnosDisponiblesProps> = ({ turnos, onSeleccionarTurno }) => {
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Turnos Disponibles</h4>
      {turnos.map((turno) => (
        <button
          key={turno}
          className="btn btn-outline-primary btn-block mb-2 rounded-pill"
          onClick={() => onSeleccionarTurno(turno)}
        >
          {turno}
        </button>
      ))}
    </div>
  );
};

export default TurnosDisponibles;
