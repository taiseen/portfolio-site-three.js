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
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 40,
  }

  return (
    <Html center as='div' style={divStyles} >
      <span className='canvas-loader'></span>
      <p style={pStyles}> {progress.toFixed(2)}% </p>
    </Html>
  );
};

export default CanvasLoader;
