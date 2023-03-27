import { Html, useProgress } from "@react-three/drei";


const CanvasLoader = () => {

  const { progress } = useProgress();

  const divStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }

  const pStyles = {
    fontSize: 16,
    marginTop: 40,
    fontWeight: 800,
    color: "#F1F1F1",
  }

  return (
    <Html center as='div' style={divStyles} >

      <span className='canvas-loader'></span>

      <p style={pStyles}> {progress.toFixed(2)}% </p>

    </Html>
  );
};

export default CanvasLoader;
