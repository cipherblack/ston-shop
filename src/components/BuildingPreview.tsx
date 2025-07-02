import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Sky, Loader } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BuildingPreviewProps {
  selectedStone: {
    texture: string;
    name: string;
  };
}

function ModernHouse({ texture }: { texture: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const [stoneTexture, setStoneTexture] = useState<THREE.Texture | null>(null);
  const [error, setError] = useState(false);
  
  // Optimize texture loading with useMemo
  const textureLoader = useMemo(() => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    return loader;
  }, []);
  
  useEffect(() => {
    let isMounted = true;
    
    const loadTexture = async () => {
      try {
        const loadedTexture = await new Promise<THREE.Texture>((resolve, reject) => {
          textureLoader.load(
            texture,
            (tex) => {
              if (isMounted) {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(2, 2);
                tex.encoding = THREE.sRGBEncoding;
                tex.anisotropy = 16;
                resolve(tex);
              }
            },
            undefined,
            (err) => {
              console.error('Texture loading error:', err);
              setError(true);
              reject(err);
            }
          );
        });
        
        if (isMounted) {
          setStoneTexture(loadedTexture);
          setError(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Failed to load texture:', error);
          setError(true);
        }
      }
    };

    loadTexture();
    return () => { 
      isMounted = false;
      if (stoneTexture) {
        stoneTexture.dispose();
      }
    };
  }, [texture, textureLoader]);

  // Optimize animation with useFrame
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
  });

  // Create geometries once
  const mainGeometry = useMemo(() => new THREE.BoxGeometry(8, 8, 6), []);
  const roofGeometry = useMemo(() => new THREE.ConeGeometry(5.7, 3, 4), []);
  const doorGeometry = useMemo(() => new THREE.BoxGeometry(1.5, 3, 0.1), []);
  const windowGeometry = useMemo(() => new THREE.BoxGeometry(1.5, 1.5, 0.1), []);
  const windowFrameGeometry = useMemo(() => new THREE.BoxGeometry(1.7, 1.7, 0.05), []);

  // Create materials once
  const materials = useMemo(() => ({
    main: new THREE.MeshStandardMaterial({
      map: stoneTexture || null,
      color: error ? '#cccccc' : '#ffffff',
      roughness: 0.7,
      metalness: 0.2,
      envMapIntensity: 1,
    }),
    roof: new THREE.MeshStandardMaterial({
      color: '#2a2a2a',
      roughness: 0.9,
    }),
    door: new THREE.MeshStandardMaterial({
      color: '#4a3525',
      metalness: 0.3,
      roughness: 0.8,
    }),
    window: new THREE.MeshPhysicalMaterial({
      color: '#87CEEB',
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
      envMapIntensity: 2,
    }),
    frame: new THREE.MeshStandardMaterial({
      color: '#2a2a2a',
    }),
  }), [stoneTexture, error]);

  // Cleanup materials on unmount
  useEffect(() => {
    return () => {
      Object.values(materials).forEach(material => {
        if (material) {
          material.dispose();
        }
      });
    };
  }, [materials]);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main building */}
      <mesh 
        geometry={mainGeometry}
        material={materials.main}
        position={[0, 2, 0]}
        castShadow 
        receiveShadow
      />

      {/* Roof */}
      <mesh
        geometry={roofGeometry}
        material={materials.roof}
        position={[0, 6.5, 0]}
        castShadow
      />

      {/* Door */}
      <mesh
        geometry={doorGeometry}
        material={materials.door}
        position={[0, 0.5, 3.01]}
        castShadow
      />

      {/* Windows */}
      {[[-2, 2], [2, 2], [-2, 4], [2, 4]].map(([x, y], i) => (
        <group key={i} position={[x, y, 3.01]}>
          <mesh geometry={windowGeometry} material={materials.window} castShadow />
          <mesh geometry={windowFrameGeometry} material={materials.frame} position={[0, 0, 0.1]} />
        </group>
      ))}

      {/* Side windows */}
      {[-3, 3].map((x) => (
        <group key={x} position={[x * 1.33, 3, 0]}>
          <mesh
            geometry={windowGeometry}
            material={materials.window}
            rotation={[0, Math.PI / 2, 0]}
            castShadow
          />
        </group>
      ))}

      {/* Steps */}
      {[0, 1, 2].map((step) => (
        <mesh
          key={step}
          position={[0, step * 0.2, 3 + step * 0.3]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[2.5 - step * 0.3, 0.2, 0.3]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
      ))}
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#cccccc" />
    </mesh>
  );
}

const BuildingPreview: React.FC<BuildingPreviewProps> = ({ selectedStone }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[700px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-50 to-gray-100"
    >
      {inView && (
        <>
          <Canvas
            shadows
            dpr={[1, Math.min(2, window.devicePixelRatio)]}
            camera={{ position: [10, 5, 10], fov: 45 }}
            gl={{
              preserveDrawingBuffer: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            performance={{ min: 0.5 }}
          >
            <Sky sunPosition={[100, 20, 100]} turbidity={0.5} />
            <Environment preset="sunset" />
            
            <ambientLight intensity={0.5} />
            <spotLight
              position={[10, 15, 10]}
              angle={0.3}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={[1024, 1024]}
            />
            <directionalLight
              position={[-5, 5, -5]}
              intensity={0.5}
              castShadow
            />
            
            <Suspense fallback={<LoadingFallback />}>
              <ModernHouse texture={selectedStone.texture} />
            </Suspense>

            <OrbitControls
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2.5}
              minDistance={8}
              maxDistance={20}
              target={[0, 0, 0]}
              enableDamping
              dampingFactor={0.05}
            />

            <mesh 
              rotation={[-Math.PI / 2, 0, 0]} 
              position={[0, -0.1, 0]} 
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#e5e5e5" />
            </mesh>
          </Canvas>
          <Loader />
        </>
      )}
    </motion.div>
  );
};

export default BuildingPreview;