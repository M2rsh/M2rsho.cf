import React, { useRef } from "react"
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber"
import { softShadows } from "@react-three/drei"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Inject soft shadow shader
extend({ OrbitControls });
softShadows()

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      
    />
  );
};

const Demo = () => {
  return(<Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }} onCreated={({camera}) => {
    camera.rotation.x += .6;
  }}>
    <CameraControls />
    <fog attach="fog" args={["black", 0, 40]} />
    <ambientLight intensity={0.4} />
    <directionalLight
      castShadow
      position={[2.5, 8, 5]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
    <pointLight position={[0, -10, 0]} intensity={1.5} />
    <group position={[0, -3.5, 0]}>
      <mesh receiveShadow castShadow>
        <boxBufferGeometry attach="geometry" args={[4, 1, 1]} />
        <meshStandardMaterial attach="material" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" transparent opacity={0.4} />
      </mesh>
    </group>
  </Canvas>)
}

export default Demo
