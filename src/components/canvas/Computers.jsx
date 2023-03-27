import { useGLTF } from "@react-three/drei";


const Computers = ({ isMobile }) => {

  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>

      <hemisphereLight intensity={0.15} groundColor='black' />

      <spotLight
        castShadow
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
        position={[-20, 50, 10]}
      />

      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        rotation={[-0.01, -0.2, -0.1]}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />

    </mesh>
  );
};


export default Computers;
