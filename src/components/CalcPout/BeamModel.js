import React from 'react';
import * as THREE from 'three';

function BeamModel({ length, width, height }) {
  // Create trapezoidal shape for the main beam
  const shape = new THREE.Shape();
  const topWidth = width * 0.95; // Top is narrower for trapezoidal effect
  shape.moveTo(-topWidth / 2, height / 2);
  shape.lineTo(topWidth / 2, height / 2);
  shape.lineTo(width / 2, -height / 2);
  shape.lineTo(-width / 2, -height / 2);
  shape.closePath();

  // Extrude the trapezoidal shape along the length
  const extrudeSettings = {
    depth: length,
    bevelEnabled: false,
  };
  const trapezoidalGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  // Create uniformly spaced rectangular cutouts within the rectangular section of the beam
  const holeWidth = width / 10; // Width of each rectangular cutout
  const holeHeight = height / 2; // Height of each rectangular cutout
  const holeSpacing = 1; // Spacing for the holes within the beam width
  const holes = [];

  for (let i = -width / 3; i <= width / 2 - 1; i++) {
    holes.push({
      position: [i * holeSpacing, 0, length / 2],
      geometry: [holeWidth, holeHeight, length],
    });
  }

  return (
      <group>
        <mesh geometry={trapezoidalGeometry}>
          <meshStandardMaterial color="#A9A9A9" />
        </mesh>
        {holes.map((hole, index) => (
            <mesh key={index} position={hole.position}>
              <boxGeometry args={hole.geometry} />
              <meshStandardMaterial color="#000000" />
            </mesh>
        ))}
      </group>
  );
}

export default BeamModel;