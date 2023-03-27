import { useGLTF } from "@react-three/drei";


const Earth = () => {

  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      scale={2.5}
      position-y={0}
      rotation-y={0}
      object={earth.scene}
    />
  );
};

export default Earth;
