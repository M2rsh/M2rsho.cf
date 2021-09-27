import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function Box(props) {
  const ref = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.05
  })
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? .15 : .1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <sphereGeometry args={[40, 40, 40]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
    />
  );
};


const Demo = () => {
  document.title = "Test  - M2rsho.cf"
  return (
        <>
        <Canvas camera={{ position: [10, 10, 25]}}>
          <CameraControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} />
          <pointLight position={[-20, -20, -20]} />
          <Box position={[-2.5, 0, 0]} />
          <Box position={[2.5, 0, 0]} />
        </Canvas>
        </>
    )
}

export default Demo;

