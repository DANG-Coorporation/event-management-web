import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "test",
  status: "OK",
  counter: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    increment: (state) => {
      state.counter += 1;
    },
  },
});

export const { setStatus, increment } = testSlice.actions;

export default testSlice.reducer;
