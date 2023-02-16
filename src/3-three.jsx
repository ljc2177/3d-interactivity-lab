import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";

function Box(props) {
  const ref = useRef();
  useFrame((state, delta))
}

function App() {
  return <Canvas>
    <mesh>
      
      <box></box>
      <box></box>
    </mesh>
  </Canvas>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
