import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./conuterSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
// const state = { counter: { counter: 0 }, theme: { theme: "light" } };

export default store;
