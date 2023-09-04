import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSwiperHovered: false,
};

const eventSwiperHoverDetectionSlicer = createSlice({
  name: "swiperHoverDetection",
  initialState,
  reducers: {
    setSwiperHover: (state, action) => {
      state.isSwiperHovered = action.payload;
    },
  },
});

export const { setSwiperHover } = eventSwiperHoverDetectionSlicer.actions;
export default eventSwiperHoverDetectionSlicer.reducer;
