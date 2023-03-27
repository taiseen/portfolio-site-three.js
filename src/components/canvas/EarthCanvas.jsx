import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader, Earth } from ".";
import { Suspense } from "react";


const EarthCanvas = () => {

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>

                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <Earth />

                <Preload all />

            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;