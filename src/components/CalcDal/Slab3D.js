import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Slab3D = ({ width, length, thickness }) => {
  useEffect(() => {
    console.log('Slab updated:', { width, length, thickness });
  }, [width, length, thickness]);

  const numberOfRectangles = Math.floor(width); // Nombre de rectangles basés sur la largeur
  const rectangleSpacing = width / (numberOfRectangles + 1); // Espacement des rectangles

  return (
      <Canvas
          style={{ height: '500px', width: 'auto' }}
          camera={{ position: [0, 20, 20], fov: 30 }} // Position de la caméra
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={5} />
        <directionalLight position={[-10, -10, -5]} intensity={3} />

        {/* Dalle en béton */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[width, thickness, length]} />
          <meshStandardMaterial color="#A9A9A9" />
        </mesh>

        {/* Positionner des rectangles (sections creuses) le long de la largeur de la dalle */}
        {numberOfRectangles > 0 &&
            [...Array(numberOfRectangles)].map((_, i) => (
                <mesh
                    key={i}
                    position={[(i + 1) * rectangleSpacing - width / 2, thickness / 10, 0]} // Positionnement centré
                >
                  <boxGeometry args={[0.8, thickness / 2, length]} /> {/* Créer un rectangle (prisme) */}
                  <meshStandardMaterial color="#000000" />
                </mesh>
            ))}

        <OrbitControls />
      </Canvas>
  );
};

export default Slab3D;