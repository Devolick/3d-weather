import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

interface Props {
  readonly model: string;
}

function Model(props: Props) {
  const [loading, setLoading] = useState(true);
  const obj = useLoader(OBJLoader, props.model, () => {});
  const ref = useRef(null);

  useEffect(() => {}, []);

  return <primitive ref={ref} object={obj.clone()} />;
}

export default Model;
