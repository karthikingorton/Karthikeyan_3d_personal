import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fish from "../models/Fish";
import Star from "../models/Star";
import Bird from "../models/Bird";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1); // Start at stage 1

  // Function to adjust Fish properties based on screen size
  const adjustFishForScreenSize = () => {
    let fishScale = null;
    let fishPosition = [0, 0, 0]; // Center position
    let rotation = [0, 0, 0]; // Neutral rotation

    if (window.innerWidth < 768) {
      fishScale = [0.5, 0.5, 0.5]; // Smaller scale for mobile
    } else {
      fishScale = [1, 1, 1]; // Larger scale for desktop
    }

    return [fishScale, fishPosition, rotation];
  };

  // Get the Fish properties based on the screen size
  const [FishScale, FishPosition, FishRotation] = adjustFishForScreenSize();

  // Function to handle stage change
  const handleStageChange = (stage) => {
    setCurrentStage(stage); // Update current stage based on the button click
  };

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Buttons to change the stage */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-4">
        <button onClick={() => handleStageChange(1)} className="btn">
          Intro
        </button>
        <button onClick={() => handleStageChange(2)} className="btn">
          About
        </button>
        <button onClick={() => handleStageChange(4)} className="btn">
          More info
        </button>
        <button onClick={() => handleStageChange(5)} className="btn">
          Get in touch
        </button>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent $(isRotating ? "cursor-grabbing" : "cursor-grab")`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting setup */}
          <directionalLight position={[5, 5, 5]} intensity={0} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />
          <Star />
          <Fish
            position={FishPosition} // Center the Fish
            scale={FishScale} // Adjust scale based on screen size
            rotation={FishRotation} // Neutral rotation
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
