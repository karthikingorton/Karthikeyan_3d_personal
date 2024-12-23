import React, { useRef } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import earthScene from '../assets/3d/earth_globe_hologram_2mb_looping_animation.glb';
import { a } from '@react-spring/three';

const Earth = (props) => {
  const earthRef = useRef();
  const { nodes, materials, animations } = useGLTF(earthScene);
  const { actions } = useAnimations(animations, earthRef);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003; // Adjust rotation speed
    }
  });

  return (
    <>
      {/* OrbitControls enables zoom and pan */}
      <OrbitControls />
      
      <a.group ref={earthRef} {...props}>
        <a.group name="Sketchfab_Scene">
          <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <a.group
              name="14451120394e4dd890e906789247ac40fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.08} // Slightly increased scale for a larger Earth
            >
              <a.group name="Object_2">
                <a.group name="RootNode">
                  <a.group name="Earth_2" rotation={[-Math.PI / 2, 0, 0.025]} scale={60}>
                    <mesh
                      name="Earth_2_Earth_Surface002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Earth_2_Earth_Surface002_0.geometry}
                      material={materials['Earth_Surface.002']}
                    />
                  </a.group>
                  <a.group name="Earth_rays_2" rotation={[-Math.PI / 2, 0, 0.025]} scale={60}>
                    <mesh
                      name="Earth_rays_2_transparent004_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Earth_rays_2_transparent004_0.geometry}
                      material={materials['transparent.004']}
                    />
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </>
  );
};

export default Earth;
