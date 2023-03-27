import * as random from "maath/random/dist/maath-random.esm";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";


const Stars = (props) => {

  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });


  return (
    <group rotation={[0, 0, Math.PI / 4]}>

      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>

        <PointMaterial
          transparent
          size={0.002}
          color='#f272c8'
          depthWrite={false}
          sizeAttenuation={true}
        />

      </Points>
    </group>
  );
};

export default Stars;