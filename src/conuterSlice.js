import { createSlice } from "@reduxjs/toolkit";

// 1. Create a slice + export
export const counterSlice = createSlice({
  //2. Name the slice
  name: "counter",
  //3. Set the initial state
  initialState: {
    counter: 0,
  },
  // 4. Define reducers
  reducers: {
    incrementByOne: (state) => {
      state.counter = state.counter + 1;
    },
    decrementByOne: (state) => {
      state.counter = state.counter - 1;
    },
    incrementByValue: (state, action) => {
      state.counter = state.counter + action.payload;
    },
  },
});

// 5. Export actions
export const { incrementByOne, decrementByOne, incrementByValue } =
  counterSlice.actions;

// 6. Export the reducer
export default counterSlice.reducer;
