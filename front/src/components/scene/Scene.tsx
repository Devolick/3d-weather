import { Canvas } from "@react-three/fiber";
import Model from "../model/Model";
import weatherPack from "../../assets/models/weather_pack.fbx";

interface Props {
  readonly style?: React.CSSProperties;
}

function Scene(props: Props) {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        ...props.style,
      }}
    >
      <Model urls={[weatherPack]} />
    </Canvas>
  );
}

export default Scene;
