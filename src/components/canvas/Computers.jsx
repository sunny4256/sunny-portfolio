import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Base ambient lighting */}
      <hemisphereLight intensity={0.5} groundColor="black" />

      {/* Main lighting */}
      <pointLight intensity={2} position={[0, 10, 0]} />

      {/* Enhanced desk lighting */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3} // Wider angle
        penumbra={0.8}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Additional desk lighting */}
      <spotLight
        position={[20, 30, -10]}
        angle={0.5}
        penumbra={0.8}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Specific desk illumination */}
      <pointLight position={[0, -2, 2]} intensity={20} distance={4} />

      {/* Fill light for better desk visibility */}
      <pointLight position={[0, -1, 0]} intensity={100} distance={5} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.6}
        position={isMobile ? [0, -3, -2.2] : [-2, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
