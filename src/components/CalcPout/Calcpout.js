import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InputForm from '../CalcDal/imputform';
import Results from '../CalcDal/Results';
import BeamModel from './BeamModel';
import { Link } from 'react-router-dom';

const SlabCalculator = () => {
  const [DesignPoutrelle, setDesignPoutrelle] = useState(null);
  const [results, setResults] = useState(null);
  const [calculated, setCalculated] = useState(false);
  const [slabTypeMessage, setSlabTypeMessage] = useState('');

  const calculateSlab = ({ length, width, thickness, load, concreteStrength }) => {
    const areaLoad = load / (length * width);
    const momentResistance = (concreteStrength * width * thickness ** 2) / 6;
    const shearForce = areaLoad * length * width;

    setResults({
      momentResistance,
      shearForce,
    });

    let message = '';
    if (length >= 12.3 && length <= 15.5) {
      message = 'Votre choix est DA320';
    } else if (length >= 9.9 && length < 12.3) {
      message = 'Votre choix est DA265';
    } else if (length >= 8.5 && length < 9.9) {
      message = 'Votre choix est DA200';
    } else {
      message = 'Votre choix est DA16';
    }
    message += '. DA320 est disponible pour toutes les longueurs.';

    setDesignPoutrelle({ width, length, thickness });
    setSlabTypeMessage(message);
    setCalculated(true);
  };

  return (
      <div className={`slab-calculator-container ${calculated ? 'calculated' : ''}`}>
        <div className="header">
          <div className="logo">
            <span className="best">BEST</span>
            <span className="beton">BETON</span>
          </div>
          <div className="title">
            <h1>Calculateur de Poutrelle en Béton</h1>
          </div>
        </div>
        <div className="dal-calculator">
          <div className="slab-calculator">
            <InputForm onCalculate={calculateSlab} />
          </div>
          {calculated && (
              <div className="threedd-calculator" style={{ width: '100%', height: '500px' }}>
                <Canvas camera={{ position: [0, 20, 20], fov: 30 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={5} />
                  <directionalLight position={[-10, -10, -5]} intensity={3} />
                  <BeamModel
                      length={DesignPoutrelle.length}
                      width={DesignPoutrelle.width}
                      height={DesignPoutrelle.thickness}
                  />
                  <OrbitControls />
                </Canvas>
              </div>
          )}
        </div>
        {calculated && (
            <div className="results-container">
              <Results results={results} />
              <div className="slab-type-message">
                <p>{slabTypeMessage}</p>
                <Link className="button-link" to="/Contact">
                  Contactez-nous
                </Link>
              </div>
            </div>
        )}
      </div>
  );
};

export default SlabCalculator;