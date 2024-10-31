import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./conuterSlice";

const store = configureStore({
  reducer: counterReducer,
});

export default store;