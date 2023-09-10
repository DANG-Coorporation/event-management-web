import { createSlice } from "@reduxjs/toolkit";

const starRatingSlicer = createSlice({
  name: "starRating",
  initialState: {
    index: 0,
    hover: 0,
    isRated: false,
    starAmount: 0,
    numericRating: "0",
    ratingData: {},
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setHover: (state, action) => {
      state.hover = action.payload;
    },
    setIsRated: (state, action) => {
      state.isRated = action.payload;
    },
    setstarAmount: (state, action) => {
      state.starAmount = action.payload;
    },
    setNumericRating: (state, action) => {
      state.numericRating = action.payload;
    },
    setRatingData: (state, action) => {
      state.ratingData = action.payload;
    },
  },
});

export const {
  setIndex,
  setHover,
  setIsRated,
  setstarAmount,
  setNumericRating,
  setRatingData,
} = starRatingSlicer.actions;
export default starRatingSlicer.reducer;
