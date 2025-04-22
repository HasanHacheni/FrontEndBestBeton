// src/Results.js
import React from 'react';

const Results = ({ results }) => {
  if (!results) return null;

  return (
    <div className="results">
      <h2>Résultats</h2>
      <p>Résistance au moment de flexion : {results.momentResistance.toFixed(2)} Nm</p>
      <p>Effort tranchant : {results.shearForce.toFixed(2)} N</p>
      
    </div>
  );
};

export default Results;
// resultat calcdall