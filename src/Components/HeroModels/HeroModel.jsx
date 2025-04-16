import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Amin } from './Amin.jsx';

// This helper component will automatically frame the model
const AutoAdjust = ({ modelRef }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      // Adjust camera to focus on model
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  return null;
};

const HeroModel = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const modelRef = useRef();

  // Calculate appropriate size based on screen
  const canvasHeight = isMobile ? '300px' : isTablet ? '400px' : '500px';

  return (
    <div
      style={{
        width: '100%',
        height: canvasHeight,
        aspectRatio: '1/1',
        maxWidth: canvasHeight,
        margin: '0 auto',
      }}
    >
      <Canvas
        camera={{
          position: [3, 0, 8], // Moved camera to front view
          fov: 25, // Narrower FOV gives more "zoomed in" appearance
        }}
      >
        <ambientLight intensity={0.4} color="1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={15}
          minDistance={5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />
        <Amin
          ref={modelRef}
          scale={1.8} // Increase scale to make model larger in frame
          position={[0, -2, 0]} // Adjust vertical position if needed
        />
        <AutoAdjust modelRef={modelRef} />
      </Canvas>
    </div>
  );
};

export default HeroModel;
