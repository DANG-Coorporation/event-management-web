import { createSlice } from "@reduxjs/toolkit";

const starRatingSlicer = createSlice({
  name: "starRating",
  initialState: {
    index: 0,
    hover: 0,
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setHover: (state, action) => {
      state.hover = action.payload;
    },
  },
});

export const { setIndex, setHover } = starRatingSlicer.actions;
export default starRatingSlicer.reducer;
