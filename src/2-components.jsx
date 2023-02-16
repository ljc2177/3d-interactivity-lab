import { useState } from "react";
import ReactDOM from "react-dom/client";

const fruit = [
  "apple",
  "orange",
  "pear",
  "grapefruit",
  "lemon",
  "apricot",
  "banana",
  "strawberry",
];

function randomFruit() {
  return fruit[Math.floor(Math.random() * fruit.length)];
}

function TodoItem({ item }) {
  return <li>{item}</li>;
}

function TodoList({ items }) {
  console.log(items);
  return (
    <ul style={{color : "green"}}>
      {items.map((item) => (
        <TodoItem item={item}></TodoItem>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <button onClick={() => setItems(items.concat([randomFruit()]))}>
        Click me
      </button>
      <TodoList items={items}/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
