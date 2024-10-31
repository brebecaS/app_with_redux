import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setLightTheme: (state) => {
      state.theme = "light";
    },
    setDarkTheme: (state) => {
      state.theme = "dark";
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
