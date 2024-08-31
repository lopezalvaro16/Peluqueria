"use client";

import React from 'react';

interface SeleccionDiaProps {
  dias: string[];
  onSeleccionDia: (dia: string) => void;
}

const SeleccionDia: React.FC<SeleccionDiaProps> = ({ dias: dias, onSeleccionDia: onSeleccionDia }) => {
  return (
    <div className="container mt-4 d-flex flex-column">
      <h4 className="mb-3">Días Disponibles</h4>
      {dias.map((dia) => (
        <button
          key={dia}
          className={`btn btn-success btn-block mb-2 rounded-pill`}
          onClick={() => onSeleccionDia(dia)}
        >
          {dia}
        </button>
      ))}
    </div>
  );
};

export default SeleccionDia;
