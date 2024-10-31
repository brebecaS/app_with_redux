import "./App.css";
import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecementButton";
import { useSelector } from "react-redux";
import IncrementByValue from "./IncrementByValue";

function App() {
  const counter = useSelector((state) => state.counter);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>
        <IncrementButton />
        <DecrementButton />
      </div>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <IncrementByValue inputValue={inputValue} />
      <h2>Value: {counter}</h2>
    </div>
  );
}

export default App;
