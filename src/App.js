import "./App.css";
import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecementButton";
import { useSelector } from "react-redux";
import IncrementByValue from "./IncrementByValue";
import ThemeButtons from "./ThemeButtons";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const { theme } = useSelector((state) => state.theme);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "wheat" : "darkblue",
        color: theme === "light" ? "black" : "white",
      }}
    >
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

      <ThemeButtons />
    </div>
  );
}

export default App;
