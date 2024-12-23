import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  // Variables for bird motion
  const timeRef = useRef(0); // Tracks time for the motion
  const screenWidth = 10; // Width of the screen
  const speed = 0.001; // Reduced speed for slower motion
  const amplitude = 1.5; // Amplitude of the sine wave

  let direction = useRef(1); // 1 for forward, -1 for backward

  useEffect(() => {
    if (actions['Take 001']) {
      actions['Take 001'].play();
      actions['Take 001'].timeScale = 0.5; // Slow down wing animation
    }
  }, [actions]);

  // Animate the bird
  useFrame(() => {
    if (birdRef.current) {
      timeRef.current += speed * direction.current;

      // Calculate x position
      let x = timeRef.current * screenWidth;

      // Check for boundaries and reverse direction
      if (x > screenWidth || x < -screenWidth) {
        direction.current *= -1; // Reverse direction

        // Change head direction
        birdRef.current.rotation.y = direction.current === 1 ? 0 : Math.PI; // Forward: 0, Backward: π
      }

      // Calculate y position using a sine wave
      const y = Math.sin(timeRef.current * Math.PI * 2) * amplitude;

      // Add Z-axis depth motion for realism
      const z = Math.cos(timeRef.current * Math.PI * 1.5) * 0.5; // Adjust for subtle depth movement

      // Set the position of the bird
      birdRef.current.position.set(x, y, z);
    }
  });

  return (
    <mesh
      position={[-screenWidth, 2, 1]}
      scale={[0.004, 0.004, 0.004]} // Slightly increased size (from 0.003 to 0.004)
      ref={birdRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
