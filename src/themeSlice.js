import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLightTheme: false,
  },
  reducers: {
    setLightTheme: (state) => {
      state.isLightTheme = true;
    },
    setDarkTheme: (state) => {
      state.isLightTheme = false;
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
