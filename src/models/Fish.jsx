import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import FishScene from "../assets/3d/primary_ion_drive.glb";
import { a } from "@react-spring/three";

const Fish = ({ isRotating, setIsRotating, ...props }) => {
  const FishRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials, animations } = useGLTF(FishScene);
  const { actions } = useAnimations(animations, FishRef.current);

  const lastx = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const [currentStage, setCurrentStage] = useState(null);

  const zoomFactor = useRef(1); // Initial zoom level
  const minZoom = 0.5; // Minimum zoom scale
  const maxZoom = 3; // Maximum zoom scale

  // Handle pointer events
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastx.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastx.current) / viewport.width;
      FishRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastx.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle Zoom (scroll wheel)
  const handleZoom = (e) => {
    e.stopPropagation();
    e.preventDefault();
    zoomFactor.current = Math.min(
      Math.max(zoomFactor.current - e.deltaY * 0.001, minZoom),
      maxZoom
    );
    FishRef.current.scale.set(zoomFactor.current, zoomFactor.current, zoomFactor.current);
  };

  // Update frame logic for rotation and stage change
  useFrame(() => {
    if (!isRotating) {
      // Automatic rotation when not interacting
      FishRef.current.rotation.y += 0.005; // Adjust for slower rotation

      // Smooth out manual rotation using damping
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
    } else {
      // If the user is interacting, let them manually control the rotation
      FishRef.current.rotation.y += rotationSpeed.current;
    }

    // Get the normalized rotation value
    const normalizedRotation = ((FishRef.current.rotation.y % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the normalized rotation value
    if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) {
      setCurrentStage(4);
    } else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3) {
      setCurrentStage(3);
    } else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6) {
      setCurrentStage(2);
    } else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) {
      setCurrentStage(1);
    } else {
      setCurrentStage(null);
    }

    // Optional: Update particle rotation if applicable
    if (nodes?.circle) {
      nodes.circle.rotation.z += 0.01; // Adjust spinning speed for particles (example)
    }
    if (nodes?.circle1) {
      nodes.circle1.rotation.z += 0.01; // Same for other meshes
    }
  });

  // Scroll event to handle stage change
  const handleScroll = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      // Scroll down: increase stage
      setCurrentStage((prevStage) => (prevStage < 4 ? prevStage + 1 : 4)); // Max stage 4
    } else {
      // Scroll up: decrease stage
      setCurrentStage((prevStage) => (prevStage > 1 ? prevStage - 1 : 1)); // Min stage 1
    }
  };

  // Register and clean up event listeners
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("wheel", handleZoom);
    canvas.addEventListener("wheel", handleScroll); // For stage change on scroll

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("wheel", handleZoom);
      canvas.removeEventListener("wheel", handleScroll); // Clean up scroll listener
    };
  }, [gl]);

  return (
    <a.group ref={FishRef} scale={[1, 1, 1]} {...props}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group
            name="f10517d4966d42c99c9bc47c460a132ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="circle">
                  <mesh
                    name="circle_constant1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.circle_constant1_0.geometry}
                    material={materials.constant1}
                  />
                  <mesh
                    name="circle_HoloFillDark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.circle_HoloFillDark_0.geometry}
                    material={materials.HoloFillDark}
                  />
                </a.group>
                <a.group name="geo1">
                  <mesh
                    name="geo1_constant1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.geo1_constant1_0.geometry}
                    material={materials.constant1}
                  />
                  <mesh
                    name="geo1_HoloFillDark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.geo1_HoloFillDark_0.geometry}
                    material={materials.HoloFillDark}
                  />
                </a.group>
                <a.group
                  name="cam1"
                  position={[0, 0, 8.8]}
                  rotation={[0, Math.PI / 2, 0]}
                >
                  <a.group name="Object_11" />
                </a.group>
                <a.group name="circle1">
                  <mesh
                    name="circle1_constant2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.circle1_constant2_0.geometry}
                    material={materials.constant2}
                  />
                </a.group>
                <a.group name="circle2">
                  <mesh
                    name="circle2_constant2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.circle2_constant2_0.geometry}
                    material={materials.constant2}
                  />
                </a.group>
                <a.group
                  name="cam2"
                  position={[-4.13, 4.452, 5.82]}
                  rotation={[-0.022, 0.961, -0.54]}
                >
                  <a.group name="Object_17" />
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
};

export default Fish;
