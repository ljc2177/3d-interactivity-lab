import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class={"current-count-" + count}
    style={{color: count%4==0 ? "red": count%3==0 ? "blue": "green"}}>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <button onMouseEnter={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
