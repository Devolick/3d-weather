import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

interface Props {
  readonly urls: string[];
}

function Model(props: Props) {
  const fbx = useLoader(FBXLoader, props.urls);

  return <primitive object={fbx} scale={0.4} />;
}

export default Model;
