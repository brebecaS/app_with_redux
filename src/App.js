import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "./themeSlice";

function App() {
  const { isLightTheme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: isLightTheme ? "wheat" : "darkblue",
        color: isLightTheme ? "black" : "white",
      }}
    >
      <button
        style={{ height: 50, width: 150, fontSize: 17, marginRight: 20 }}
        onClick={() => {
          dispatch(setDarkTheme());
        }}
      >
        Dark Theme
      </button>
      <button
        style={{ height: 50, width: 150, fontSize: 17 }}
        onClick={() => {
          dispatch(setLightTheme());
        }}
      >
        Light Theme
      </button>
    </div>
  );
}

export default App;
