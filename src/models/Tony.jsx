import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'; // Ensure useFrame is imported from 'fiber'
import { useGLTF, useAnimations } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'; // For easy camera controls
import birdScene from '../assets/3d/groot_dancing.glb';

const Tony = () => {
  const { scene, animations } = useGLTF(birdScene); // Load the model and animations
  const { actions } = useAnimations(animations, scene); // Use useAnimations for better control

  useEffect(() => {
    if (animations.length > 0) {
      // Play the first animation from the GLB model
      actions[animations[0].name]?.play(); // Ensure that the action is played
    }

    return () => {
      // Clean up animations when the component unmounts
      if (actions) {
        Object.values(actions).forEach(action => action.stop());
      }
    };
  }, [animations, actions]);

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

// Main component with Canvas and Lights
const Scene = () => {
  return (
    <Canvas>
      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} intensity={1} />
      {/* Add the model */}
      <Tony />
      {/* Add controls to move the camera */}
      <OrbitControls />
    </Canvas>
  );
};

export default Tony;
