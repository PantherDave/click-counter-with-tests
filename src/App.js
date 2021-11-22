import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [ctr, setCount] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The count is {ctr}</h1>
      <button data-test="increment-button" onClick={() => setCount(ctr + 1)}>
        Increment counter
      </button>
    </div>
  );
}

export default App;
