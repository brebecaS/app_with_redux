import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setLightTheme, setDarkTheme } from "./themeSlice";

const ThemeButtons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        style={{ height: 50, width: 150, fontSize: 17, marginRight: 20 }}
        onClick={() => dispatch(setDarkTheme())}
      >
        Dark Theme
      </button>
      <button
        style={{ height: 50, width: 150, fontSize: 17 }}
        onClick={() => dispatch(setLightTheme())}
      >
        Light Theme
      </button>
    </>
  );
};

export default ThemeButtons;
