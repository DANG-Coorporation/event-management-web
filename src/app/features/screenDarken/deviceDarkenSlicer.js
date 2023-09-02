import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isScreenDarken: false,
};

const screenDarkenSlice = createSlice({
  name: "screenDarken",
  initialState,
  reducers: {
    setScreenDarkenState(state, action) {
      state.isScreenDarken = action.payload;
    },
  },
});

export const { setScreenDarkenState } = screenDarkenSlice.actions;
export default screenDarkenSlice.reducer;
