import "./App.css";

function App() {
  const theme = "light";

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "wheat" : "darkblue",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <button
        style={{ height: 50, width: 150, fontSize: 17, marginRight: 20 }}
        onClick={() => {}}
      >
        Dark Theme
      </button>
      <button
        style={{ height: 50, width: 150, fontSize: 17 }}
        onClick={() => {}}
      >
        Light Theme
      </button>
    </div>
  );
}

export default App;
