import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import starScene from '../assets/3d/star2.glb';

const Star = () => {
  const star = useGLTF(starScene);
  const starRef = useRef();

  // Use `useFrame` to rotate the model on every frame with reduced speed
  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.002; // Rotate around Y-axis
      starRef.current.rotation.x += 0.001; // Rotate around X-axis
      starRef.current.rotation.z += 0.001; // Rotate around Z-axis
    }
  });

  return (
    <mesh ref={starRef} scale={[0.7, 0.7, 0.7]}> {/* Reduce size to half */}
      <primitive object={star.scene} />
    </mesh>
  );
};

export default Star;
