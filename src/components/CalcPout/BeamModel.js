import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
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
  const holeWidth = width / 10;  // Width of each rectangular cutout
  const holeHeight = height / 2; // Height of each rectangular cutout
  const holeSpacing = 1; // Spacing for the holes within the beam width
  const holes = [];

  for (let i = -width/3; i <= (width/2)-1; i++) {
    const holeGeometry = new THREE.BoxGeometry(holeWidth, holeHeight, length); // Rectangle cutout
    const holeMesh = new THREE.Mesh(holeGeometry, new THREE.MeshStandardMaterial({ color: '#000000' }));
    holeMesh.position.set(i * holeSpacing, 0, length/2); // Center cutouts within the width and along the z-axis
    holes.push(holeMesh);
  }

  return (
    <group>
      <mesh geometry={trapezoidalGeometry}>
        <meshStandardMaterial color="#A9A9A9" />
      </mesh>
      {holes.map((hole, index) => (
        <primitive key={index} object={hole} />
      ))}
    </group>
  );
}

function BeamModelCanvas({ length, width, height }) {
  return (
    <Canvas style={{ width: '100%', height: '500px' }}
    camera={{ position: [0, 20, 20], fov: 30 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 1]} />
      <OrbitControls />
      <BeamModel length={length} width={width} height={height} />
    </Canvas>
  );
}

export default BeamModelCanvas;
