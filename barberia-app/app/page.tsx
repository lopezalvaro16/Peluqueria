"use client";

import React, { useState } from 'react';
import SeleccionDia from '../components/SeleccionDeDia';
import TurnosDisponibles from '../components/TurnosDisponibles';
import OpcionesDePago from '../components/OpcionesDePago';

const HomePage: React.FC = () => {
  const [seleccionDia, setSeleccionDia] = useState<string>('');
  const [turnoDisp, setTurnoDisp] = useState<string[]>([]);
  const [seleccionTurno, setSeleccionTurno] = useState<string>('');
  const [metodoPago, setMetodoPago] = useState<string>('');
  const [step, setStep] = useState<number>(0); 

  const dias = ['lunes', 'martes', 'miercoles','Jueves','Viernes'];

  const handleSeleccionDia = (day: string) => {
    setSeleccionDia(day);
    setTurnoDisp([  "9:00",
      "9:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00"]); 
    setStep(1); 
  };
  const handleSeleccionTurno = (slot: string) => {
    setSeleccionTurno(slot);
    setStep(2);
  };
  const handleSeleccionarPago = (method: string) => {
    setMetodoPago(method);
    alert(`Turno confirmado para ${seleccionDia} a las ${seleccionTurno} con pago ${method}`);
    setStep(0); 
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1); 
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center">Reserva tu Turno</h1>
      <div className="d-flex justify-content-center align-items-center flex-column">
      {step === 0 && <SeleccionDia dias={dias} onSeleccionDia={handleSeleccionDia} />}
      {step === 1 && <TurnosDisponibles turnos={turnoDisp} onSeleccionarTurno={handleSeleccionTurno} />}
      {step === 2 && <OpcionesDePago onSeleccionarPago={handleSeleccionarPago} />}
      {step > 0 && (
        <button className="btn mt-3 btn-secondary" onClick={handleBack}>
          Volver
        </button>
      )}
      </div>
    </div>
  );
};

export default HomePage;
