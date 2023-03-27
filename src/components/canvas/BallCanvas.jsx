import { OrbitControls, Preload, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ball, CanvasLoader } from ".";
import { Suspense } from "react";

const BallCanvas = ({ icon }) => {

    return (
        <Canvas
            dpr={[1, 2]}
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>

                <OrbitControls enableZoom={false} />

                <Ball imgUrl={icon} />

            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;