"use client";

import React from 'react';

interface OpcionesDePagoProps {
  onSeleccionarPago: (metodo: string) => void;
}

const OpcionesDePago: React.FC<OpcionesDePagoProps> = ({ onSeleccionarPago }) => {
  return (
    <div className="container mt-4 d-flex justify-content-center align-items-center flex-column">
      <h4 className="mb-3">Opciones de Pago</h4>
      <button
        className="btn btn-primary btn-block mb-2 rounded-pill"
        onClick={() => onSeleccionarPago('mercadoPago')}
      >
        Pagar con MercadoPago
      </button>
      <button
        className="btn btn-secondary btn-block mb-2 rounded-pill"
        onClick={() => onSeleccionarPago('efectivo')}
      >
        Pagar en Efectivo
      </button>
    </div>
  );
};

export default OpcionesDePago;
