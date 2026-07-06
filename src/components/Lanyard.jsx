import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import cardGLB from '../assets/lanyard/card.glb';
import lanyardTexture from '../assets/lanyard/lanyard.png';
import * as THREE from 'three';
import './Lanyard.css';

export default function Lanyard({
  position = [0, 0, 5],
  fov = 20
}) {
  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <directionalLight position={[-10, -10, -5]} intensity={0.6} />
        <pointLight position={[0, 5, 2]} intensity={0.5} />
        <LanyardBand />
        <Card />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

function LanyardBand() {
  const bandRef = useRef();
  const texture = useMemo(() => {
    const tex = new THREE.TextureLoader().load(lanyardTexture);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 1);
    return tex;
  }, []);
  
  useFrame((state) => {
    if (bandRef.current) {
      const time = state.clock.elapsedTime;
      const points = [];
      
      // Create a more natural lanyard curve
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        const x = t * 3.5;
        const y = Math.sin(t * Math.PI + time * 0.3) * 0.4 + 1.5;
        const z = Math.sin(t * Math.PI * 2 + time * 0.2) * 0.15;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      curve.tension = 0.5;
      const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.06, 8, false);
      bandRef.current.geometry.dispose();
      bandRef.current.geometry = tubeGeometry;
    }
  });

  return (
    <mesh ref={bandRef}>
      <meshStandardMaterial 
        map={texture} 
        transparent={true}
        opacity={0.95}
        roughness={0.6}
        metalness={0.2}
      />
    </mesh>
  );
}

function Card() {
  const { nodes, materials } = useGLTF(cardGLB);
  const cardRef = useRef();

  useFrame((state) => {
    if (cardRef.current) {
      const time = state.clock.elapsedTime;
      // More subtle and natural card movement
      cardRef.current.rotation.y = Math.sin(time * 0.4) * 0.25 + Math.PI * 0.15;
      cardRef.current.rotation.x = Math.sin(time * 0.25) * 0.08;
      cardRef.current.rotation.z = Math.sin(time * 0.15) * 0.05;
      cardRef.current.position.y = Math.sin(time * 0.2) * 0.08 - 0.5;
      cardRef.current.position.x = 3 + Math.sin(time * 0.3) * 0.05;
    }
  });

  return (
    <group ref={cardRef} scale={2.25} position={[3, -0.5, 0]}>
      <mesh geometry={nodes.card.geometry} material={materials.base} />
      <mesh geometry={nodes.clip.geometry} material={materials.metal} />
      <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
    </group>
  );
}
