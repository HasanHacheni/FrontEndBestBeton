// src/components/CalcDal/InputForm.js
import React, { useState } from 'react';
import './ImputForm.css';
const InputForm = ({ onCalculate }) => {
  const [length, setLength] = useState(15);
  const [width, setWidth] = useState(6);
  const [thickness, setThickness] = useState(0.5);
  const [load, setLoad] = useState(1000);
  const [concreteStrength, setConcreteStrength] = useState(25);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ length, width, thickness, load, concreteStrength });
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="input-group">
        <label>Longueur (m):</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseFloat(e.target.value))}
          min="1"
          step="0.1"
        />
      </div>
      <div className="input-group">
        <label>Largeur (m):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(parseFloat(e.target.value))}
          min="1"
          step="0.1"
        />
      </div>
      <div className="input-group">
        <label>Épaisseur (m):</label>
        <input
          type="number"
          value={thickness}
          onChange={(e) => setThickness(parseFloat(e.target.value))}
          min="0.1"
          step="0.01"
        />
      </div>
      <div className="input-group">
        <label>Charge (N):</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(parseFloat(e.target.value))}
          min="0"
          step="10"
        />
      </div>
      <div className="input-group">
        <label>Résistance du béton (MPa):</label>
        <input
          type="number"
          value={concreteStrength}
          onChange={(e) => setConcreteStrength(parseFloat(e.target.value))}
          min="10"
          step="1"
        />
      </div>
      <button type="submit">Calculer</button>
    </form>
  );
};

export default InputForm;


