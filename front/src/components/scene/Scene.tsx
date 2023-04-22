import { Canvas } from "@react-three/fiber";
import Model from "../model/Model";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Guid } from "guid-typescript";

interface Props {
  readonly style?: React.CSSProperties;
  readonly models: string[];
}

function Scene(props: Props) {
  const [id] = useState(Guid.create().toString());

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
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <OrbitControls />
      {props.models.map((url, index) => (
        <Model key={index} model={url} />
      ))}
    </Canvas>
  );
}

export default Scene;
